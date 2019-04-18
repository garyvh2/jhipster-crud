package com.gitgud.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Team.
 */
@Entity
@Table(name = "team")
public class Team implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @NotNull
    @Column(name = "status", nullable = false)
    private String status;

    @OneToMany(mappedBy = "team")
    private Set<Student> members = new HashSet<>();
    @OneToMany(mappedBy = "team")
    private Set<Sprint> sprints = new HashSet<>();
    @ManyToOne(optional = false)
    @NotNull
    @JsonIgnoreProperties("teams")
    private Project project;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Team name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStatus() {
        return status;
    }

    public Team status(String status) {
        this.status = status;
        return this;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Set<Student> getMembers() {
        return members;
    }

    public Team members(Set<Student> students) {
        this.members = students;
        return this;
    }

    public Team addMembers(Student student) {
        this.members.add(student);
        student.setTeam(this);
        return this;
    }

    public Team removeMembers(Student student) {
        this.members.remove(student);
        student.setTeam(null);
        return this;
    }

    public void setMembers(Set<Student> students) {
        this.members = students;
    }

    public Set<Sprint> getSprints() {
        return sprints;
    }

    public Team sprints(Set<Sprint> sprints) {
        this.sprints = sprints;
        return this;
    }

    public Team addSprints(Sprint sprint) {
        this.sprints.add(sprint);
        sprint.setTeam(this);
        return this;
    }

    public Team removeSprints(Sprint sprint) {
        this.sprints.remove(sprint);
        sprint.setTeam(null);
        return this;
    }

    public void setSprints(Set<Sprint> sprints) {
        this.sprints = sprints;
    }

    public Project getProject() {
        return project;
    }

    public Team project(Project project) {
        this.project = project;
        return this;
    }

    public void setProject(Project project) {
        this.project = project;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Team team = (Team) o;
        if (team.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), team.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Team{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", status='" + getStatus() + "'" +
            "}";
    }
}
