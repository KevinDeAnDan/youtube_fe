<template>
<div class="sidebar">
    <div class="sidebar__one">
        <div class="sidebar__div">
            <font-awesome-icon class="sidebar__icon" icon="fa-solid fa-house" />
            <router-link to="/"><a href="">Trang chủ</a></router-link>
        </div>
        <div class="sidebar__div">
            <font-awesome-icon class="sidebar__icon" icon="fa-solid fa-compass" />
            <router-link to="/discover"><a href="">Khám phá</a></router-link>
        </div>
        <div class="sidebar__div">
            <font-awesome-icon class="sidebar__icon" icon="fa-solid fa-radio" />
            <router-link to="/"><a href="">Shorts</a></router-link>
        </div>
        <div class="sidebar__div">
            <font-awesome-icon class="sidebar__icon" icon="fa-solid fa-envelope-circle-check" />
            <router-link to="/"><a href="">Kênh đăng ký</a></router-link>
        </div>
    </div>
    <div class="sidebar__two">
        <div class="sidebar__div">
            <font-awesome-icon class="sidebar__icon" icon="fa-solid fa-book-atlas" />
            <span>Thư viện</span>
        </div>
        <div class="sidebar__div">
            <font-awesome-icon class="sidebar__icon" icon="fa-solid fa-clock-rotate-left" />
            <span>Video đã xem</span>
        </div>
        <div class="sidebar__div">
            <font-awesome-icon class="sidebar__icon" icon="fa-solid fa-photo-film" />
            <span>Video của bạn</span>
        </div>
        <div class="sidebar__div">
            <font-awesome-icon class="sidebar__icon" icon="fa-solid fa-clock" />
            <span>Xem lại</span>
        </div>
        <div class="sidebar__div">
            <font-awesome-icon class="sidebar__icon" icon="fa-solid fa-thumbs-up" />
            <span>Video đã thích</span>
        </div>
    </div>
    <div class="sidebar__three">
        <span>KÊNH ĐĂNG KÝ</span>
        <div class="sidebar__div">
            <font-awesome-icon class="sidebar__icon" icon="fa-solid fa-circle-check" />
            <span>VETV7 ESPORTS</span>
        </div>
        <div class="sidebar__div">
            <font-awesome-icon class="sidebar__icon" icon="fa-solid fa-circle-check" />
            <span>5-Minute Crafts</span>
        </div>
        <div class="sidebar__div">
            <font-awesome-icon class="sidebar__icon" icon="fa-solid fa-circle-check" />
            <span>MixiGaming</span>
        </div>
        <div class="sidebar__div">
            <font-awesome-icon class="sidebar__icon" icon="fa-solid fa-circle-check" />
            <span>FAPTV</span>
        </div>
        <div class="sidebar__div">
            <font-awesome-icon class="sidebar__icon" icon="fa-solid fa-circle-check" />
            <span>Khoa Pug</span>
        </div>
    </div>
    <div class="sidebar__four">
        <span>DỊCH VỤ KHÁC CỦA</span>
        <span>YOUTUBE</span>
        <div class="sidebar__div">
            <font-awesome-icon class="sidebar__icon" icon="fa-solid fa-gamepad" />
            <span>VETV7 ESPORTS</span>
        </div>
        <div class="sidebar__div">
            <font-awesome-icon class="sidebar__icon" icon="fa-solid fa-tower-broadcast" />
            <span>5-Minute Crafts</span>
        </div>
        <div class="sidebar__div">
            <font-awesome-icon class="sidebar__icon" icon="fa-solid fa-trophy" />
            <span>MixiGaming</span>
        </div>
    </div>
    <div class="sidebar__five">
        <div class="sidebar__div">
            <font-awesome-icon class="sidebar__icon" icon="fa-solid fa-gear" />
            <span>Cài đặt</span>
        </div>
        <div class="sidebar__div">
            <font-awesome-icon class="sidebar__icon" icon="fa-solid fa-flag" />
            <span>Lịch sử báo cáo</span>
        </div>
        <div class="sidebar__div">
            <font-awesome-icon class="sidebar__icon" icon="fa-solid fa-circle-question" />
            <span>Trợ giúp</span>
        </div>
        <div class="sidebar__div">
            <font-awesome-icon class="sidebar__icon" icon="fa-solid fa-comment-dots" />
            <span>Gửi phản hồi</span>
        </div>
    </div>
    <div class="sidebar__six">
        <span>Giới thiệu&ensp;Báo trí&ensp;Bản quyền</span>
            <br>
        <span>Liên hệ với chúng tôi</span>    
            <br>
        <span>Người sáng tạo&ensp;Quảng cáo</span>    
            <br>
        <span>Nhà phát triển</span>    
            <br>
            <br>
        <span>Điều khoản&ensp;Quyền riêng tư</span>    
            <br>
        <span>Chính sách và an toàn</span>    
            <br>
        <span>Cách Youtube hoạt động</span>    
            <br>
        <span> Thử các tính năng mới</span> 
            <br>
            <br>
        <span>© 2022 Google LLC</span>  
    </div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
.sidebar {
    background-color: #202020;
    width: 240px;
}
.sidebar__one {
    margin-top: 60px;
}
.sidebar__one, 
.sidebar__two,
.sidebar__three,
.sidebar__four,
.sidebar__five,
.sidebar__six {
    border-bottom: 1px solid rgb(63, 62, 62);
    padding-bottom: 8px;
    padding-top: 6px;
}
.sidebar__icon {
    color: #fff;
    margin-left: 28px;
}
a {
    text-decoration: none;
    color: #fff;
    margin-left: 14px;
    font-size: 0.95rem;
}
span {
    color: #fff;
    font-size: 0.95rem;
    margin-left: 26px;
}
.sidebar__div {
    padding: 14px 0;
}
.sidebar__div:hover {
    background-color: #3b3939;
} 
.sidebar__four > span,
.sidebar__three > span {
    color: rgb(165, 161, 161);
    font-size: 1rem;
    font-weight: 700;
}
.sidebar__three,
.sidebar__four,
.sidebar__five,
.sidebar__six {
    margin-top: 10px;
}
.sidebar__six > span {
    color: rgb(165, 161, 161);
    font-size: 0.88rem;
}
</style>
