import { useEffect, useState } from 'react';
import './App.css';
import { storage } from './firebase/firebase';

function App(props) {
  const [image, setImage] = useState(null);
  const [allImages, setImages] = useState([]);

  const onImageChange = (e) => {
    const reader = new FileReader();
    let file = e.target.files[0];
    if (file) {
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(file);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setImage(null);
    }
  };
  const upload = (e) => {
    if (image) {
      const storageRef = storage.ref();
      const imageRef = storageRef.child(image.name);
      imageRef.put(image).then(() => {
        alert('Image uploaded successfully to Firebase.');
      });
    } else {
      alert('Please select a image');
    }
  };
  useEffect(() => {
    const storageRef = storage.ref();
    storageRef
      .listAll()
      .then((res) => {
        res.items.forEach((imageRef) => {
          imageRef.getDownloadURL().then((url) => {
            setImages((allImages) => [...allImages, url]);
          });
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteImage = (image) => {
    const picRef = storage.refFromURL(image);
    picRef
      .delete()
      .then((res) => {
        setImages(allImages.filter((key) => key !== image));
        alert('picture deleted successfully');
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <input
        type='file'
        accept='image/x-png,image/jpeg'
        onChange={(e) => {
          onImageChange(e);
        }}
      />
      <br />
      <button id='upload-btn' onClick={(e) => upload(e)}>
        Upload To Firebase
      </button>
      <br />
      {allImages.map((image) => (
        <img
          id='img'
          onClick={(e) => deleteImage(image)}
          key={image}
          src={image}
          alt={image}
        />
      ))}
    </div>
  );
}

export default App;
