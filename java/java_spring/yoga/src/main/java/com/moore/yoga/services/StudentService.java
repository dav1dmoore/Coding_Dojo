package com.moore.yoga.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moore.yoga.models.Course;
import com.moore.yoga.models.Student;
import com.moore.yoga.repositories.CourseRepository;
import com.moore.yoga.repositories.StudentRepository;

@Service
public class StudentService {
	
	@Autowired
	private CourseRepository courseRepo;
	@Autowired
	private StudentRepository studentRepo;
	
	public Student createStudent(Student student) {
		return studentRepo.save(student);
	}
	
	public List<Student> findAllByCourses(Course course){
		return studentRepo.findAllByCourses(course);
	}
    public void addStudentToCourse(Long courseId, Student student) {
	    // retrieve an instance of a category using another method in the service.
	    Course thisCourse = courseRepo.findCourseById(courseId);
	    
	    thisCourse.getStudents().add(student);
	    
	    // Save thisProduct, since you made changes to its category list.
	    studentRepo.save(student);	
    }
}

