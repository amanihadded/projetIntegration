package com.BoycottApp.BoycottApp.Services;

import com.BoycottApp.BoycottApp.entities.Notification;
import com.BoycottApp.BoycottApp.entities.User;
import com.BoycottApp.BoycottApp.repositories.NotificationRepo;
import com.BoycottApp.BoycottApp.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class NotificationService {
    @Autowired
    UserRepo userRepo;

    @Autowired
    NotificationRepo notificationRepo;

    public Notification createNotification(Long userId, Notification notification) {
        Optional<User> userOptional = userRepo.findById(userId);
        if (userOptional.isPresent()) {
            notification.setSendDate(new Date());
            notification.setUser(userOptional.get());
            return notificationRepo.save(notification);
        }
        return null;
    }

    public List<Notification> getNotificationsByUserId(Long userId) {
        return notificationRepo.findByUserId(userId);
    }
}
