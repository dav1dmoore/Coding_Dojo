package com.moore.yoga.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.moore.yoga.models.Course;
import com.moore.yoga.models.Student;

@Repository
public interface StudentRepository extends CrudRepository<Student, Long> {

@SuppressWarnings("unchecked")
Student save(Student student);
Student findStudentById(Long id);
List<Student> findAll();
List<Student> findAllByCourses(Course course);
List<Student> findByCoursesNotContains(Course course);
Student findStudentByEmail(String string);

}
