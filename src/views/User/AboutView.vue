<template>
    <main-header />
    <sub-header heading="#WhoWeAre" subHeading="Get to know us" />
    <div class="container">
        <article>
            <img
                src="@/assets/images/a6.webp"
                class="about-img"
                alt="Who we are"
            />
            <div class="about-text">
                <h1>Chúng tôi là ai ?</h1>
                <p>
                    Chúng tôi tự hào về thời gian giao hàng và sự hài lòng của
                    khách hàng . Nền tảng của chúng tôi kết nối bạn với các nhà
                    cung cấp dịch vụ tốt nhất trong khu vực của bạn. Chúng tôi
                    là một nhóm gồm những sinh viên <strong>TLU</strong> trẻ và
                    đầy nhiệt huyết, luôn tận tâm cung cấp cho bạn dịch vụ tốt
                    nhất có thể.
                </p>
            </div>
        </article>
    </div>
    <service-section />
    <main-footer />
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import ServiceSection from "@/components/home_components/ServiceSection.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
export default {
    components: { SubHeader, ServiceSection, MainHeader, MainFooter },
    name: "AboutView",
};
</script>

<style scoped>
article {
    display: flex;
    gap: 4rem;
    margin-bottom: 2.5rem;
}
.about-img {
    height: 50vh;
    width: 50%;
    object-fit: cover;
}

.about-text {
    width: 50%;
}

.about-text p {
    line-height: 25px;
}

@media (max-width: 499px) {
    article {
        flex-direction: column;
    }
    .about-img,
    .about-text,
    .video-banner {
        width: 100%;
    }

    h1 {
        font-size: 4rem;
    }
}
</style>
