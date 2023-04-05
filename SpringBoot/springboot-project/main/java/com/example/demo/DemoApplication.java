package com.example.demo;


 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;
 
@SpringBootApplication
public class DemoApplication implements CommandLineRunner {
     
    @Autowired
    private JdbcTemplate jdbcTemplate;
     
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
 
    @Override
    public void run(String... args) throws Exception {
        String sql = "INSERT INTO users (user_id,username,password, email,full_name,address, phone_number) VALUES (?, ?, ?,?,?,?,?)";
         
        int result = jdbcTemplate.update(sql,7, "Ravi", "ravi2021","ravi.kumar@gmail.com","Ravi Kumar","Mysore", "7654389213");
         
        if (result > 0) {
            System.out.println("A new row has been inserted.");
        }
         
    }
 
}
