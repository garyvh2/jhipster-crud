package com.gitgud.repository;

import com.gitgud.domain.Story;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Story entity.
 */
@SuppressWarnings("unused")
@Repository
public interface StoryRepository extends JpaRepository<Story, Long> {

}
