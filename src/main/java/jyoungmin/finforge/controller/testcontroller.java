package jyoungmin.finforge.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class testcontroller {
    @GetMapping("/test1")
    public String test(Model model) {
        System.out.println("test1");
        
        // 페이지에 필요한 속성들 설정
        model.addAttribute("title", "FinForge | Dashboard");
        model.addAttribute("pageTitle", "Dashboard");
        model.addAttribute("currentPage", "dashboard");
        model.addAttribute("pageStyle", "ui003Style");
        model.addAttribute("pageScript", "ui003Script");

        return "dashboard";
    }



    @GetMapping("/dashboard")
    public String dashboard(Model model) {
        model.addAttribute("title", "FinForge | Dashboard");
        model.addAttribute("pageTitle", "Dashboard");
        model.addAttribute("currentPage", "dashboard");
        model.addAttribute("pageStyle", "ui003Style");
        model.addAttribute("pageScript", "ui003Script");
        return "dashboard";
    }

    @GetMapping("/stocks")
    public String stocks(Model model) {
        model.addAttribute("title", "FinForge | Stock Trading");
        model.addAttribute("pageTitle", "Stock Trading");
        model.addAttribute("currentPage", "stocks");
        model.addAttribute("pageStyle", "ui004Style");
        model.addAttribute("pageScript", "ui004Script");
        return "stocks";
    }

    @GetMapping("/transfer")
    public String transfer(Model model) {
        model.addAttribute("title", "FinForge | Transfer");
        model.addAttribute("pageTitle", "Transfer Money");
        model.addAttribute("currentPage", "transfer");
        model.addAttribute("pageStyle", "ui005Style");
        model.addAttribute("pageScript", "ui005Script");
        return "transfer";
    }

    @GetMapping("/shared-wallets")
    public String sharedWallets(Model model) {
        model.addAttribute("title", "FinForge | Shared Wallets");
        model.addAttribute("pageTitle", "Shared Wallets");
        model.addAttribute("currentPage", "sharedWallets");
        model.addAttribute("pageStyle", "ui006Style");
        model.addAttribute("pageScript", "ui006Script");
        return "sharedWallets";
    }

    @GetMapping("/notifications")
    public String notifications(Model model) {
        model.addAttribute("title", "FinForge | Notifications");
        model.addAttribute("pageTitle", "Notification Center");
        model.addAttribute("currentPage", "notifications");
        model.addAttribute("pageStyle", "ui007Style");
        model.addAttribute("pageScript", "ui007Script");
        return "notifications";
    }
}
