package com.moore.yoga.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.moore.yoga.models.Course;
import com.moore.yoga.models.Student;
import com.moore.yoga.services.CourseService;
import com.moore.yoga.services.StudentService;

@Controller
public class CourseController {

//	  @Autowired
//	  private UserService userServ;
//	
	@Autowired
	private CourseService courseServ;
	
	@Autowired
	private StudentService studentServ;
	  
	  @GetMapping("/course/create")
	  public String index(Model model, HttpSession session) {
		if (session.getAttribute("userId") == null) {
			return "redirect:/";
		}
	      model.addAttribute("newCourse", new Course());
	      return "course.jsp";
	  }
	  
	@PostMapping("/createCourse")
	public String courseCreate(@Valid @ModelAttribute("newCourse") Course course, BindingResult result, Model model, HttpSession session) {
		if (session.getAttribute("userId") == null) {
			return "redirect:/";
		}
		if(result.hasErrors()) {
			return "course.jsp";
		} else {
			courseServ.createCourse(course);
			return "redirect:/home";
		}
	}
	
	 @GetMapping("/course/{id}/edit")
	 public String editCourse(@PathVariable("id") Long id, Model model, HttpSession session) {
		 
		if (session.getAttribute("userId") == null) {
			return "redirect:/";
		}
		model.addAttribute("course", courseServ.getCourseById(id));
		return "editcourse.jsp";
	 }
	 
	@PutMapping("/course/{id}/edit")
	public String updateBook(@PathVariable("id") Long id, @Valid @ModelAttribute("course") Course course, BindingResult result, Model model) {
		if(result.hasErrors()) {
			return "editcourse.jsp";
		} else {
			courseServ.updateCourse(course);
			return "redirect:/home";
		}
	}
	
	@DeleteMapping("/course/{id}/delete")
	public String deleteCourse(@PathVariable("id") Long id) {
		courseServ.deleteById(id);
		return "redirect:/home";
	}
	
	 @GetMapping("/course/{id}")
	 public String viewCourse(@PathVariable("id") Long id, Model model, HttpSession session) {
		 
		if (session.getAttribute("userId") == null) {
			return "redirect:/";
		}
		session.setAttribute("courseId", id);
		model.addAttribute("newStudent", new Student());
		Course thisCourse = courseServ.getCourseById(id);
		model.addAttribute("students", studentServ.findAllByCourses(thisCourse));
		model.addAttribute("course", courseServ.getCourseById(id));
		return "viewcourse.jsp";
	 }
	 
		@PostMapping("/addStudent")
		public String addStudent(@RequestParam("courseId") Long courseId, @Valid @ModelAttribute("newStudent") Student student, BindingResult result, Model model) {
			if(result.hasErrors()) {
				return "viewcourse.jsp";
			} else {
//				Student newStudent = studentServ.createStudent(student);
				studentServ.addStudentToCourse(courseId, student);
				return "redirect:/home";
			}
		}
}
