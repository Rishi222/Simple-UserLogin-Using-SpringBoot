package com.rishi.spring_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.rishi.spring_backend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
}
