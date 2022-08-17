// // estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };


document.addEventListener('DOMContentLoaded', () => {
  fetchData()
  })
 
  export const fetchData = async () => {
     try {
       const res = await fetch('athletes.json')
      const data = await res.json()
       console.log(data)
     } catch (error) {
     console.log(error)
     
 
 }
  }
 