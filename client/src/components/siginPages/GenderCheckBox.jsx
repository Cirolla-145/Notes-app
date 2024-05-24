import React from 'react'

const GenderCheckBox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className='flex'>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender==="male"? "selected" :""}`} htmlFor="">
            <span className='label-text'>Male</span>
            <input type="checkbox" className='checkbox border-slate-900' name="gender" id="male" 
            checked={selectedGender==='male'}
            onChange={()=>{onCheckboxChange("male")}}
            />
        </label>
      </div>

      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender==="female"? "selected" :""}`} htmlFor="">
            <span className='label-text'>Female</span>
            <input type="checkbox" className='checkbox border-slate-900' name="gender" id="female" 
            checked={selectedGender==='female'}
            onChange={()=>{onCheckboxChange("female")}}
            />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckBox




























// starter code

// import React from 'react'

// const GenderCheckBox = () => {
//   return (
//     <div className='flex'>
//       <div className="form-control">
//         <label className={`label gap-2 cursor-pointer`} htmlFor="">
//             <span className='label-text'>Male</span>
//             <input type="checkbox" className='checkbox border-slate-900' name="gender" id="male" />
//         </label>
//       </div>

//       <div className="form-control">
//         <label className={`label gap-2 cursor-pointer`} htmlFor="">
//             <span className='label-text'>Female</span>
//             <input type="checkbox" className='checkbox border-slate-900' name="gender" id="female" />
//         </label>
//       </div>
//     </div>
//   )
// }

// export default GenderCheckBox
