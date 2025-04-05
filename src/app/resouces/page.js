import React from "react";
import Tutorial from "./tutorial";
import Image from "next/image";
import ForumPost from "./forum";



export default function Resources() {

    const posts = [
        {
            id: 1,
            avatar: "bg-red-500",
            initial: "A",
            title: "Trouble with 3D Rendering",
            content: "Hi friends, I'm having issues with rendering my 3D design. The textures look blurry, and some objects don't appear as they should. I've checked my settings, but I can't figure out what's wrong. Does anyone know how to fix this? Any tips would be appreciated!",
            likes: 5,
            comments: 3,
        },
        {
            id: 2,
            avatar: "bg-blue-500",
            initial: "C",
            title: "Need Feedback on My Room Design",
            content: "Hello designers, I just completed a modern living room, but something feels off. I've experimented with different layouts and lighting, but it still doesn't look quite right. Could you take a look and share your suggestions? I'd love to improve it with your insights!",
            likes: 8,
            comments: 5,
        },
        {
            id: 3,
            avatar: "bg-pink-500",
            initial: "I",
            title: "Exporting in High Quality—What Am I Doing Wrong?",
            content: "Hey, I need to export my 3D design in high resolution, but every time I do, the image turns out pixelated. Are there specific settings I should change to get a crisp and clear export? Also, what's the best format for sharing online? Any tips would be appreciated!",
            likes: 7,
            comments: 4,
        },
        {
            id: 4,
            avatar: "bg-yellow-500",
            initial: "E",
            title: "Looking for Collaboration on a New Project",
            content: "Hi friends, I'm working on a futuristic home design and would love to collaborate with someone who has experience with lighting and material textures. If anyone is interested, let's connect and create something awesome together!",
            likes: 10,
            comments: 6,
        },
    ];

    return (
        <>
            <div className="m-5">
                <p className="text-3xl font-bold p-4 m-4">
                    Resources & Support
                </p>
                <p className="text-xl font-light pl-4 ml-4">
                    Find everything you need to learn, troubleshoot, and connect with the community in one place. Whether <br></br>you’re a beginner or
                    an experienced designer, our resources will help you make the most of Vision 3D.
                </p>

                <p className="text-3xl font-bold p-4 m-4">
                    📚 Tutorials
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6  items-center justify-center pl-32">
                    <Tutorial
                        imageSrc="/resources/Teacher student.png"
                        altText="Beginner Guide"
                        title="Beginner Guide"
                        desc="Learn the basics of creating a home in 3D"
                    />

                    <Tutorial
                        imageSrc="/resources/Learning.png"
                        altText="Advanced Tips"
                        title="Advanced Tips"
                        desc="Master lighting, materials, and model optimization"
                    />

                    <Tutorial
                        imageSrc="/resources/Video tutorial.png"
                        altText="Video Tutorials"
                        title="Video Tutorials"
                        desc="Watch hands-on lessons to improve your skills"
                    />

                    <Tutorial
                        imageSrc="/resources/House searching.png"
                        altText="Quick Start Guide"
                        title="Quick Start Guide"
                        desc="A simple introduction to essential tools and features"
                    />
                </div>

                <p className="text-3xl font-bold p-4 m-4">
                    ❓ FAQs
                </p>
                <p className="text-xl font-light pl-4 ml-4">
                    Find answers to common questions about Vision 3D
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6  items-center justify-center pl-20">

                    <div className=" grid grid-cols-1 md:grid-cols-1 gap-6">

                        <button className="text-lg font-serif bg-gray-300 p-3 m-2">
                            How do I create my first 3D design?
                            <strong className="ml-32">˃</strong>
                        </button>

                        <button className="text-lg font-serif bg-gray-300 p-3 m-2">
                            How do I recover a lost or unsaved project?
                            <strong className="ml-18">˃</strong>
                        </button>

                        <button className="text-lg font-serif bg-gray-300 p-3 m-2">
                            How do I create an account on Vision 3D?
                            <strong className="ml-20">˃</strong>
                        </button>

                        <button className="text-lg font-serif bg-gray-300 p-3 m-2">
                            Can I change my email or password?
                            <strong className="ml-30">˃</strong>
                        </button>

                    </div>

                    <div className="pl-20">
                        <Image
                            src="/resources/FAQs.png"
                            alt="FAQ"
                            height={650}
                            width={450}
                        />

                    </div>

                </div>

                <p className="text-3xl font-bold p-4 m-4">
                    Still have questions?
                </p>

                <p className="text-xl font-light pl-4 ml-4">
                    If you couldn’t find the answer you’re looking for, feel free to:
                </p>

                <div className="text-xl font-serif pl-4 ml-4 mt-10">
                    → Visit our Community Forum
                    <p className="text-lg font-light pl-20 ml-4">Ask other users and get help from experienced designers</p>
                </div>

                <div className="text-xl font-serif pl-4 ml-4 mt-10">
                    → Check our Tutorials
                    <p className="text-lg font-light pl-20 ml-4">Browse step-by-step guides and video lessons</p>
                </div>

                <div className="text-xl font-serif pl-4 ml-4 mt-10">
                    → Contact Support
                    <p className="text-lg font-light pl-20 ml-4">Reach out to our team for further assistance</p>
                </div>

                <p className="text-3xl font-bold p-4 m-4">
                    💬 Community Forum
                </p>

                <div className="max-w-7xl mx-auto bg-gray-300 rounded-lg shadow-sm border border-gray-500 float-left mb-20">
                    <div className="p-6 border-b border-gray-400">
                        <h1 className="text-2xl font-bold text-gray-900">3D Design Discussion Forum</h1>
                        <p className="text-gray-600">Share your designs, get feedback, and connect with other designers</p>
                    </div>

                    {posts.map((post) => (
                        <ForumPost
                            key={post.id}
                            avatar={post.avatar}
                            initial={post.initial}
                            title={post.title}
                            content={post.content}
                            likes={post.likes}
                            comments={post.comments}
                        />
                    ))}

                    <div className="p-6 border-t border-gray-400">
                        <button className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200">
                            Create New Post
                        </button>
                    </div>
                </div>


            </div>

        </>
    )
};