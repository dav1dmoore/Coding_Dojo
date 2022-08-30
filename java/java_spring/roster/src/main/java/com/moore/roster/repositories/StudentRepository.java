package com.moore.roster.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.moore.roster.models.Course;
import com.moore.roster.models.Student;

@Repository
public interface StudentRepository extends CrudRepository<Student, Long>  {
	List<Student> findAllByCourses(Course course);
}
