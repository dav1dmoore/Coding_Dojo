package com.moore.roster.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moore.roster.models.Course;
import com.moore.roster.models.Student;
import com.moore.roster.repositories.StudentRepository;

@Service
public class StudentService {
	@Autowired
	private StudentRepository studentRepo;
	
	public List<Student> listStudentsByCourse(Course course){
		return studentRepo.findAllByCourses(course);
	}
	
}
