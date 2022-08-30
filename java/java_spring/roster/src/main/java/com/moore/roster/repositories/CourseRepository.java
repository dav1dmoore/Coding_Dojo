package com.moore.roster.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.moore.roster.models.Course;

@Repository
public interface CourseRepository extends CrudRepository<Course, Long>{

		Course findCourseById(Long id);
}
