
FROM openjdk:21
FROM maven:latest
# Set the working directory to /app
WORKDIR /app

RUN ["mvn", "clean" ,"install"]
# Copy the current directory contents into the container at /app
COPY target/*.jar /app/app.jar

# Make port 8080 available to the world outside this container
EXPOSE 8888

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
