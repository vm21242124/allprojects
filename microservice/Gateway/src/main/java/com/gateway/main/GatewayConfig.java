package com.gateway.main;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {
    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("path_route", r -> r.path("/user/*")
                        .uri("http://localhost:8081"))
                .route("path_route",r->r.path("/admin/*")
                        .uri("http://localhost:8082"))
                .build();
    }
}
