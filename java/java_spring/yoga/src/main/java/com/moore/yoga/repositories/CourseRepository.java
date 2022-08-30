package com.moore.yoga.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.moore.yoga.models.Course;
import com.moore.yoga.models.Student;

@Repository
public interface CourseRepository extends CrudRepository<Course, Long> {
@SuppressWarnings("unchecked")
Course save(Course course);
Optional<Course> findById(Long id);
List<Course> findAll();
Course findCourseById(Long id);
void deleteById(Long id);

// Retrieves a list of all categories for a particular product
//List<Student> findAllByCourses(Course Course);
}
