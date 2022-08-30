package com.moore.yoga.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moore.yoga.models.Course;
import com.moore.yoga.models.Student;
import com.moore.yoga.repositories.CourseRepository;

@Service
public class CourseService {

		@Autowired
		private CourseRepository courseRepo;
		
		public Course createCourse(Course course) {
			return courseRepo.save(course);
		}
		public List<Course> allCourses(){
			return courseRepo.findAll();
		}
		public Course getCourseById(Long id) {
			return courseRepo.findCourseById(id);
		}
		public void updateCourse(Course course) {
			courseRepo.save(course);
		}
		public void deleteById(Long id) {
			courseRepo.deleteById(id);
		}
//		public void deleteByCourse(Course course) {
//			courseRepo.delete(course);
//		}
		
//		public List<Student> studentsInCourse(Course course){
//			return courseRepo.findAllByCourses(course);
//		}
		
}
