import type { Icon } from "@phosphor-icons/react";
import { CreditCard, Cube, GameController, Heart, Plug, Pulse, SlidersHorizontal } from "@phosphor-icons/react";

export type Feature = { number: string; title: string; copy: string; icon: Icon };
export type Game = { title: string; category: string; number: string };
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
  { title: "THE LOST TEMPLE", category: "Adventure", number: "01" },
  { title: "BASKETBALL HOOPS", category: "Sports", number: "02" },
  { title: "FOOTBALL STRIKE", category: "Sports", number: "03" },
  { title: "RACING CHALLENGE", category: "Racing", number: "04" },
  { title: "FRUIT NINJA", category: "Arcade", number: "05" },
  { title: "DANCE BEAT", category: "Fitness", number: "06" },
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
