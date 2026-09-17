import type { Icon } from "@phosphor-icons/react";
import { CreditCard, Cube, GameController, Heart, Plug, Pulse, SlidersHorizontal } from "@phosphor-icons/react";

export type Feature = { number: string; title: string; copy: string; icon: Icon };
export type Game = { title: string; category: string; number: string; poster?: string };
export type GalleryItem = { label: string; title: string; category: string };
export type Video = { title: string; time: string };
export type Stat = { value: string; label: string };

export const audiences = ["Malls", "Corporates", "Schools", "Hotels", "Gyms", "Amusement Centers", "Events & Exhibitions"];
export const features: Feature[] = [
  { number: "01", title: "Motion Sensor Technology", copy: "Full-body, controller-free gaming", icon: Pulse },
  { number: "02", title: "Wide Range of Games", copy: "Sports, Adventure, Fitness & More", icon: GameController },
  { number: "03", title: "Engaging & Healthy", copy: "Fun + physical activity", icon: Heart },
  { number: "04", title: "Compact & Stylish", copy: "Modern design, fits any space", icon: Cube },
  { number: "05", title: "Easy Installation", copy: "Plug & play setup", icon: Plug },
  { number: "06", title: "Remote Content Management", copy: "Add new games anytime", icon: SlidersHorizontal },
  { number: "07", title: "Secure Payments", copy: "UPI, card & wallet support", icon: CreditCard },
];
export const games: Game[] = [
  { title: "TENNIS STRIKE", category: "Sports", number: "01", poster: "Tennis_Strike_Poster_1080x1920.png" },
  { title: "SAND RACERS", category: "Racing", number: "02", poster: "Sand_Racers_Poster_1080x1920.png" },
  { title: "RHYTHM SLASH", category: "Rhythm", number: "03", poster: "Rhythm_Slash_Posters_1080x1920.png" },
  { title: "KNOCK OUT BOXING", category: "Sports", number: "04", poster: "Knock_Out_Boxing_Poster_1080x1920.png" },
  { title: "JETHALAL SPEED KA TADAKA", category: "Arcade", number: "05", poster: "Jethalal_Speed_Ka_Tadaka_Game_Poster_1080x1920.png" },
  { title: "GOAL DEFENDER", category: "Sports", number: "06", poster: "Goal_Defender_Poster_1080x1920.png" },
  { title: "EMPIRE SAVIOR", category: "Adventure", number: "07", poster: "Empire_Savior_Poster1080x1920.png" },
  { title: "DOWNHILL RIDERS", category: "Racing", number: "08", poster: "Downhill_Riders_Game_Poster_1080x1920.png" },
  { title: "BEAT TAP", category: "Music", number: "09", poster: "Beat_Tap_Game_Poster_1080x1920.png" },
];
export const galleryItems: GalleryItem[] = [
  { label: "Kiosk / 01", title: "Designed to move", category: "kiosk" },
  { label: "In action / 02", title: "Play without limits", category: "in-action" },
  { label: "Events / 03", title: "Bring people together", category: "events" },
];
export const videos: Video[] = [
  { title: "ArcadeLX Overview", time: "1:24" },
  { title: "Gameplay Experience", time: "0:48" },
  { title: "Quick Setup Guide", time: "1:10" },
  { title: "At Malls & Events", time: "0:56" },
];
export const stats: Stat[] = [
  { value: "50+", label: "Games" }, { value: "100K+", label: "Happy Players" },
  { value: "200+", label: "Locations" }, { value: "99%", label: "Positive Feedback" },
];
