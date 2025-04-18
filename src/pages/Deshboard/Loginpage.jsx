import React from 'react'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useState } from "react";
import { app } from "../../firebase"

function Loginpage() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const auth = getAuth(app);

	const handlelogin = async (e) => {
		try{
				await createUserWithEmailAndPassword(auth,email,password);
				console.log(" Welcome to NineNine ");
		}catch(err){
				console.log(err);
		}
}
	return (
		<div class="min-h-screen flex items-center justify-center w-full dark:bg-white">
			<div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
				<h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
				<form action="#" onSubmit={handlelogin}  >
					<div class="mb-4">
						<label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
						<input type="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value) }} class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required />
					</div>
					<div class="mb-4">
						<label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" >Password</label>
						<input type="password" id="password" value={password}  onChange={(e) => {setPassword(e.target.value) }} class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required />
						<a href="#"
							class="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot
							Password?</a>
					</div>
					<div class="flex items-center justify-between mb-4">
						<div class="flex items-center">
							<input type="checkbox" id="remember" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" checked />
							<label for="remember" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
						</div>
						<a href="/signin"
							class="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create
							Account</a>
					</div>
					<button onclick="alert('hello')" type="submit" class="w-full rounded button1 hover:scale-105 hover:shadow-xl hover:translate-y-[-1px] focus:ring-4 flex justify-center py-2 px-4 border border-transparent  shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-offset-2 focus:ring-blue-500 items-center  transition duration-300 ease-in-out">Login</button>
				</form>
			</div>
		</div>
	)
}

export default Loginpage
