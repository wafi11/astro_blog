import React, { useState } from 'react'


type Props  = {
    postId : string,
    token : string
}

const Comment = ({token,postId} : Props) => {
    const [input,setInput] = useState('')
    console.log(token)
    const handleInputChange = (event: any) => {
        setInput(event.target.value);
    };
    const handleClick = async() => {
        if (input.trim() === '') {
            return; 
        }
        try {
            const response = await fetch('/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: input,blogId : postId ,token})
            });

            if (response.ok) {
                console.log("Comment posted successfully");
                setInput(''); // Clear input field after posting
            } else {
                console.error("Failed to post comment");
            }
        } catch (error) {
            console.error("Error posting comment:", error);
        }
    }
  return (
<div className="flex items-center border-b-2 border-black ">
                <textarea  id="comment"  placeholder="Write a comment..." className="w-full h-auto max-h-[300px] border-none focus:outline-none" onChange={handleInputChange}/>
                <button
                id="sendComment"
                className="ml-4 text-blue-500 font-semibold"
                onClick={handleClick}
            >
                Post
            </button>            </div>
    )
}

export default Comment