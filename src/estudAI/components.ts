import BannerComponent from '@/components/homePage.vue/BannerComponent.vue';
import HeaderComponent from '@/components/homePage.vue/HeaderComponent.vue';
import SearchComponent from '@/components/homePage.vue/SearchComponent.vue';
import FilterComponent from '@/components/homePage.vue/FilterComponent.vue';
import CourseComponent from '@/components/homePage.vue/CourseComponent.vue';
import TitleComponent from '@/components/coursePage.vue/TitleComponent.vue'
import TopicsComponent from "@/components/coursePage.vue/TopicsComponent.vue";
import CourseListComponent from '@/components/coursePage.vue/CourseListComponent.vue';
import TitleTopicComponent from "@/components/topicPage.vue/TitleTopicComponent.vue";
import ContentComponent from "@/components/topicPage.vue/ContentComponent.vue";
import OptionsComponent from "@/components/topicPage.vue/OptionsComponent.vue";
import SubTitleComponent from "@/components/signInPage.vue/SubTitleComponent.vue";
import FormComponent from "@/components/signInPage.vue/FormComponent.vue";
import SignInButton from "@/components/signInPage.vue/SignInButton.vue";
import LabelSignUp from '@/components/signInPage.vue/LabelSignUp.vue';
import AvatarImgComponent from "@/components/homePage.vue/Profile/AvatarImgComponent.vue";
import TabsSectionComponent from "@/components/homePage.vue/Profile/TabsSectionComponent.vue";
import AboutComponent from "@/components/homePage.vue/Profile/AboutComponent.vue";
import ActivityComponent from "@/components/homePage.vue/Profile/ActivityComponent.vue";
import EditProfileComponent from "@/components/homePage.vue/Profile/EditProfileComponent.vue";
import SubTitleSignUpComponent from "@/components/signUpPage.vue/SubTitleSignUpComponent.vue";
import FormRegisterComponent from "@/components/signUpPage.vue/FormRegisterComponent.vue";
import SearchBarComponent from "@/components/bookPage.vue/SearchBarComponent.vue";
import BookListComponent from "@/components/bookPage.vue/BookListComponent.vue";
import { useCourseStore } from "@/stores/BookStore";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { IonContent, IonPage, IonInput, IonIcon, IonSpinner, IonHeader,IonToolbar,
    IonTitle, IonImg, IonLabel, IonButton, IonItem, IonCheckbox, IonSelect, IonSelectOption } from '@ionic/vue';
import { menuOutline as menuIcon, bookOutline as bookIcon,
    settingsOutline as settingsIcon, eyeOffOutline, searchOutline } from "ionicons/icons";

export {
    useCourseStore,
    onMounted,
    useRouter,
    BannerComponent,
    SearchBarComponent,
    EditProfileComponent,
    ActivityComponent,
    BookListComponent,
    AboutComponent,
    FormRegisterComponent,
    SubTitleSignUpComponent,
    LabelSignUp,
    AvatarImgComponent,
    TabsSectionComponent,
    FormComponent,
    SignInButton,
    HeaderComponent,
    SearchComponent,
    FilterComponent,
    CourseComponent,
    TitleComponent,
    TopicsComponent,
    SubTitleComponent,
    CourseListComponent,
    TitleTopicComponent,
    ContentComponent,
    OptionsComponent,
    IonContent,
    IonIcon,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonInput,
    IonPage,
    eyeOffOutline,
    IonItem,
    menuIcon,
    bookIcon,
    settingsIcon,
    IonCheckbox,
    IonSpinner,
    IonHeader,
    searchOutline,
    IonToolbar, 
    IonTitle,
    IonImg,
    IonLabel
}