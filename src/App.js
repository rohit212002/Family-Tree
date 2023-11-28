import React, { useState } from 'react';
import Page from './components/Page';
import { familyData, updateFamilyData } from './components/data';
import './index.css'

function App() {

  const Data = familyData;

  const [AddChild, setAddChild] = useState(false);

  function handleAddChild(event) {
    setAddChild(true);
    // console.log('xxsd');

  }

  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [gender, setGender] = useState("");
  const [details, setDetails] = useState("");
  const [relation, setRelation] = useState("");

  // console.log(name);

  const handleChangeGender = (event) => {
    setGender(event.target.value)
  }
  const handleChangeRelation = (event) => {
    setRelation(event.target.value)
  }

  // const [image, setImage] = useState(null)
  // const onImageChange = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     console.log('Kyad');

  //     setImage(URL.createObjectURL(event.target.files[0]));
  //   }
  // }

  // console.log(image);

  function handleSubmit(event) {
    event.preventDefault();

    for (let i = 0; i < Data.length; i++) {
      if (Data[i].name === name) {
        alert("Name is already existed You can Use Jr.");
        return;
      }

    }
    for (let i = 0; i < Data.length; i++) {
      if (Data[i].name === fatherName) {
        Data[i].children.push(name);
        break;
      }

    }

    const newChild = {
      "name": name,
      "photoUrl": "",
      "Male": gender,
      "relation": relation,
      "details": details,
      "children": []
    };
    console.log(familyData);
    updateFamilyData(newChild);
    setAddChild(false);
    setName('');
    setGender('');
    setDetails('');
    console.log(familyData);
    setAddChild(false);
  }

  // console.log(Data[0].Wife);
  return (
    <div id='xyz'>

      <p className='topp'></p>
      < Page name={Data[0].name}
        photoUrl={Data[0].photoUrl}
        details={Data[0].details}
        gender={Data[0].Gender}
        relation={Data[0].relation}
        children={Data[0].children}
      />
      <div className="addChild">
        {AddChild === false && <button className='addChildbtn' onClick={() => handleAddChild()} >Add Child</button>}
      </div>

      {AddChild === true && (
        <div className='dataInput'>
          <p className='Tags'>Father Name</p>  <input className='Boxes'
            type="text"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)} ></input>

          <p className='Tags'>Name</p>  <input className='Boxes'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} ></input>

          <p className='Tags'>Gender</p>
          <select className='Boxes radio' value={gender} onChange={handleChangeGender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <p className='Tags'>Relation</p>
          <select className='Boxes radio' value={relation} onChange={handleChangeRelation}>
            <option value="Husband">Husband</option>
            <option value="Wife">Wife</option>
            <option value="">Unmarried</option>
          </select>

          <p className='Tags'>Details</p>  <input className='Boxes'
            type="text"
            value={details}
            onChange={(e) => setDetails(e.target.value)}></input>

          {/* <input type="file" onChange={onImageChange} className="filetype" /> */}
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default App;



// naam pr click hone ke baad naam ko data me dhundhenge fir uske baad uska page banega

