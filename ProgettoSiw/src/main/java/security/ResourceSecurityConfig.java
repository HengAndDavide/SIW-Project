//package security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.web.servlet.ViewResolver;
//import org.springframework.web.servlet.config.annotation.ViewControllerRegistration;
//import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//import org.springframework.web.servlet.view.InternalResourceViewResolver;
//
//import it.uniroma3.service.ResponsabileDetailsService;
//
//@Configuration
//@EnableWebSecurity
//public class ResourceSecurityConfig extends WebSecurityConfigurerAdapter {
//
//	@Bean
//	public UserDetailsService userDetailsService() {
//		return new ResponsabileDetailsService();
//	}
//
//	@Bean
//	public BCryptPasswordEncoder passwordEncoder() {
//		return new BCryptPasswordEncoder();
//	}
//
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		auth.userDetailsService(userDetailsService()).passwordEncoder(passwordEncoder());
//	}
//
//	@Override
//	protected void configure(HttpSecurity httpSecurity) throws Exception {
//		httpSecurity.csrf().disable().authorizeRequests().antMatchers("/").hasRole("admin").and().formLogin()
//				.loginPage("/login").failureUrl("/login-error").permitAll(true).and().logout()
//				.logoutSuccessUrl("/login").permitAll();
//
//	}
//
//	@Bean
//	public ViewResolver viewResolver() {
//		InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
//		viewResolver.setPrefix("/templates/");
//		viewResolver.setSuffix(".html");
//		return viewResolver;
//	}
//
//}
