<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Omikuji</title>
<link rel="stylesheet" href="/css/style.css" />
</head>
<body class="show">
	<h1>Here's Your Omikuji!</h1>
	<div class="hero">
		<p>In <c:out value="${number}"/> years, you will live in <c:out value="${city}"/> with 
		<c:out value="${person}"/> as your room-mate, <c:out value="${hobby}"/>. The next time you see a <c:out value="${thing}"/>, you will
		have good luck. Also, <c:out value="${saySomething}"/>.</p>
	</div>
	<a href="/omikuji">Go Back</a>
</body>
</html>