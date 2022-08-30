package com.moore.roster.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moore.roster.models.Course;
import com.moore.roster.repositories.CourseRepository;

@Service
public class CourseService {
	@Autowired
	private CourseRepository courseRepo;
	
	public Course addCourse(Course course) {
		return courseRepo.save(course);
	}
	
	public Iterable<Course> allCourses(){
		return courseRepo.findAll();
	}
	
	public Course findById(Long Id) {
		return courseRepo.findCourseById(Id);
	}
}
