// import React, { useState } from 'react';
// import { server } from '../db/config';
// import { z } from 'zod';

// const schema = z.object({
//   Title: z.string().min(1, "Title is required"),
//   desc: z.string().min(1, "Description is required"),
//   author: z.string().min(1, "Author is required"),
//   category: z.array(z.string()).min(1, "Category is required"),
//   images: z.string().url("Images must be a valid URL")
// });

// const Form = () => {
//   const [formData, setFormData] = useState({
//     Title: '',
//     desc: '',
//     author: '',
//     category: [],
//     images: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const validationResult = schema.parse(formData);
//       console.log('Valid form data:', validationResult);
//       const formDataToSend = new FormData();
//       formDataToSend.append('Title', formData.Title);
//       formDataToSend.append('desc', formData.desc);
//       formDataToSend.append('author', formData.author);
//       formData.category.forEach((cat) => {
//         formDataToSend.append('category', cat);
//       });
//       formDataToSend.append('images', formData.images);
//       const res = await server.create(formDataToSend);

//       if (res.success) {
//         console.log('Book created:', res.book);
//         setFormData({
//           Title: '',
//           desc: '',
//           author: '',
//           category: [],
//           images: ''
//         });
//         alert('Book created successfully!');
//       } else {
//         console.error('Failed to create book:', res.error);
//         alert(`Error: ${res.error}`);
//       }
//     } catch (error) {
//       console.error('Form validation error:', error);
//       alert('Please fill out the form correctly.');
//     }
//   };

//   return (
//     <div className="container w-full h-full  py-[50px]">
//       <form onSubmit={handleSubmit} className="space-y-4 w-full flex flex-col justify-center items-center ">
//         <div className='w-[500px] flex flex-col justify-center transition duration-300 ease-in-out transform hover:scale-105'>
//           <label htmlFor="Title" className="block mb-1 font-medium">Title</label>
//           <input
//             type="text"
//             id="Title"
//             name="Title"
//             value={formData.Title}
//             onChange={handleChange}
//             placeholder="Enter title"
//             required
//             className="border-b-[2px] border-black focus:outline-none w-full"
//           />
//         </div>
//         <div className='w-[500px] flex flex-col justify-center transition duration-300 ease-in-out transform hover:scale-105'>
//           <label htmlFor="author" className="block mb-1 font-medium">Author</label>
//           <input
//             type="text"
//             id="author"
//             name="author"
//             value={formData.author}
//             onChange={handleChange}
//             placeholder="Enter author"
//             required
//             className="border-b-[2px] border-black focus:outline-none w-full"
//           />
//         </div>
//         <div className='w-[500px] flex flex-col justify-center transition duration-300 ease-in-out transform hover:scale-105'>
//           <label htmlFor="category" className="block mb-1 font-medium">Category (comma-separated)</label>
//           <input
//             type="text"
//             id="category"
//             name="category"
//             value={formData.category.join(', ')}
//             onChange={handleChange}
//             placeholder="Enter categories"
//             required
//             className="border-b-[2px] border-black focus:outline-none w-full"
//           />
//         </div>
//         <div className='w-[500px] flex flex-col justify-center transition duration-300 ease-in-out transform hover:scale-105'>
//           <label htmlFor="images" className="block mb-1 font-medium">Image URL</label>
//           <input
//             type="url"
//             id="images"
//             name="images"
//             value={formData.images}
//             onChange={handleChange}
//             placeholder="Enter image URL"
//             required
//             className="border-b-[2px] border-black focus:outline-none w-full"
//           />
//         </div>
//         <div className='w-[500px] h-[100px] transition duration-300 ease-in-out transform hover:scale-105'>
//           <label htmlFor="desc" className="block mb-1 font-medium">Description</label>
//           <textarea
//             id="desc"
//             name="desc"
//             value={formData.desc}
//             onChange={handleChange}
//             placeholder="Enter description"
//             required
//             className="border-b-[2px] border-black focus:outline-none w-full h-full"
//           />
//         </div>   
//         <button type="submit" className="bg-blue-500 text-white py-5  mt-10 px-4 rounded hover:bg-blue-600 transition duration-300">Create Book</button>
//       </form>
//     </div>
//   );
// };

// export default Form;
