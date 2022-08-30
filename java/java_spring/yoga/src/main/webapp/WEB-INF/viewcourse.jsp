<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Formatting (dates) --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Create A Task</title>
</head>
<body>
<h1><c:out value="${course.name}"/> with <c:out value="${course.user.firstName}"/></h1>
<p>Day: <c:out value="${course.day}"></c:out></p>
<p>Cost: <c:out value="${course.formatAmount()}"></c:out></p>
<p>Time: <c:out value="${course.time}"></c:out></p>
<p><c:out value="${course.description}"></c:out></p>
<a href="/home">Home</a>
<h1>Students</h1>
			<c:forEach var="student" items="${students}">
			<p><c:out value="${student.name}"></c:out></p>
			</c:forEach>
<h1>Add students to course</h1>
<form:form action="/addStudent" method="POST" modelAttribute="newStudent">
	        <input type="hidden" name="courseId" value="${course.id}"/>
	        <div>
               <form:label path="name">
                   Name:
               </form:label>
               <form:input type="text" path="name"/>
               <form:errors path="name" />
           </div>
           <div>
               <form:label path="email">
                   email:
               </form:label>
               <form:input type="email" path="email"/>
               <form:errors path="email" />
           </div>
           <button type="submit">
               Submit
           </button>
       </form:form>
       <a href="/home">Cancel</a>
</body>
</html>