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
import SettingsComponent from "@/components/homePage.vue/Profile/SettingsComponent.vue";
import ActivityComponent from "@/components/homePage.vue/Profile/ActivityComponent.vue";
import EditProfileComponent from "@/components/homePage.vue/Profile/EditProfileComponent.vue";
import SubTitleSignUpComponent from "@/components/signUpPage.vue/SubTitleSignUpComponent.vue";
import FormRegisterComponent from "@/components/signUpPage.vue/FormRegisterComponent.vue";
import SearchBarComponent from "@/components/bookPage.vue/SearchBarComponent.vue";
import BookListComponent from "@/components/bookPage.vue/BookListComponent.vue";
import { marked } from "marked";
import {getToken, signInUserAuthenticated} from "@/api/api";
import { useCourseStore } from "@/stores/BookStore";
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref, watch, computed } from "vue";
import { IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader,IonCardContent, IonText, IonLoading, IonContent, IonPage, IonInput, IonIcon, IonSpinner, IonHeader,IonToolbar,
    IonTitle, IonImg, IonLabel, IonButton, IonItem, IonCheckbox, IonSelect, IonSelectOption, IonToggle } from '@ionic/vue';
import { menuOutline as menuIcon, bookOutline as bookIcon,
    settingsOutline as settingsIcon, eyeOffOutline, searchOutline, languageOutline, language, keyOutline,
    settings, shareSocialOutline, lockClosedOutline,documentTextOutline,informationCircleOutline, createOutline,
    create,createSharp, peopleSharp } from "ionicons/icons";

export {
    peopleSharp,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonCard,
    IonText,
    IonLoading,
    createSharp,
    create,
    createOutline,
    informationCircleOutline,
    documentTextOutline,
    lockClosedOutline,
    shareSocialOutline,
    settings,
    keyOutline,
    language,
    languageOutline,
    IonToggle,
    marked,
    useRoute,
    computed,
    watch,
    ref,
    useCourseStore,
    onMounted,
    useRouter,
    signInUserAuthenticated,
    getToken,
    BannerComponent,
    SearchBarComponent,
    EditProfileComponent,
    ActivityComponent,
    BookListComponent,
    SettingsComponent,
    FormRegisterComponent,
    SubTitleSignUpComponent,
    LabelSignUp,
    AvatarImgComponent,
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