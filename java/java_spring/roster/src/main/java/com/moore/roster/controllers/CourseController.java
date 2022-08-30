package com.moore.roster.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.moore.roster.models.Course;
import com.moore.roster.services.CourseService;
import com.moore.roster.services.StudentService;


@Controller
public class CourseController {
	
	@Autowired
	private CourseService courseServ;
	
	@Autowired
	private StudentService studentServ;
	
	 @GetMapping("/class/new")
	 public String newClass(Model model) {
	     model.addAttribute("newCourse", new Course());
	     return "newclass.jsp";
	 }
	 
	 @PostMapping("/createCourse")
		public String createCourse(@Valid @ModelAttribute("newCourse") Course course, BindingResult result, Model model) {
			if(result.hasErrors()) {
				return "newclass.jsp";
			} else {
				courseServ.addCourse(course);
				return "redirect:/classes";
			}
		}
	 
	 @GetMapping("/classes")
	 public String classes(Model model) {
	     model.addAttribute("courses", courseServ.allCourses());
	     return "classes.jsp";
	 }
	 
	 @GetMapping("/course/{id}")
	 public String viewCourse(@PathVariable("id") Long id, Model model) {
		 Course thisCourse = courseServ.findById(id);
		 model.addAttribute("course", thisCourse);
		 model.addAttribute("students", studentServ.listStudentsByCourse(thisCourse));
		 return 
	 }
}
