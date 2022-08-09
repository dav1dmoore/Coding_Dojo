<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Omikuji</title>
<link rel="stylesheet" href="/css/style.css" />
</head>
<body>
	<h1>Send an Omikuji!</h1>
	<div>
		<form action="/login" method="POST">
			<div>
				<label for="number">Pick any number from 5 to 25:</label>
				<input type="number" id="number" name="number" min="5" max="25">
			</div>
			<div>
			    <label for="city">
                   Enter the name of any city:
               </label>
               <input type="text" id="city" name="city"/>
           </div>
           <div>
               <label for="person">
                   Enter the name of any real person:
               </label>
               <input type="text" id="person" name="person"/>
           </div>
           <div>
               <label for="hobby">
                   Enter professional endeavor or hobby:
               </label>
               <input type="text" id="hobby" name="hobby"/>
           </div>
           <div>
               <label for="thing">
                   Enter type of living thing:
               </label>
               <input type="text" id="thing" name="thing"/>
           </div>
           <div>
               <label for="saySomething">
                   Say something nice to someone:
               </label>
               <textarea name="saySomething" id="saySomething" cols="30" rows="10"></textarea>
           </div>
           <div>
	           <p>Send and show a friend</p>
	           <button type="submit" class="btn">
	           		Send
	           </button>
           </div>
    </form>
	</div>
</body>
</html>