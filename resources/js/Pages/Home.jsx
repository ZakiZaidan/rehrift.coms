import React from "react";
import Nav from "../Layouts/Nav";

function Home({ users }) {
    return (
        <Nav>
            <div className="text-white flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Latest user</h1>
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="bg-gray-800 p-4 rounded-lg mb-4 w-full"
                    >
                        <h2 className="text-xl font-semibold">{user.name}</h2>
                        <p className="mt-2">{user.email}</p>
                    </div>
                ))}
            </div>
        </Nav>
    );
}

export default Home;
