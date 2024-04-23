package com.buncua.movies;

import org.springframework.context.annotation.Configuration;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.Customizer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.context.annotation.Bean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import javax.sql.DataSource;

@Configuration
public class WebSecurityConfig {

  // private final DataSource dataSource;

  // @Autowired
  // public WebSecurityConfig(DataSource dataSource) {
  //     this.dataSource = dataSource;
  // }

  // @Bean
  // public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
  //   http
  //     .authorizeHttpRequests((authorize) -> authorize
  //       .anyRequest().fullyAuthenticated()
  //     )
  //     .formLogin(Customizer.withDefaults());

  //   return http.build();
  // }

  // @Autowired
  // public void configure(AuthenticationManagerBuilder auth) throws Exception {
  //     auth.jdbcAuthentication()
  //         .dataSource(dataSource)
  //         .usersByUsernameQuery("SELECT username, password, enabled FROM users WHERE username=?")
  //         .authoritiesByUsernameQuery("SELECT username, authority FROM authorities WHERE username=?")
  //         .passwordEncoder(new BCryptPasswordEncoder());
  // }
}
