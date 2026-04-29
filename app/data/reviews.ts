export type Review = {
  review: string;
  name: string;
  course: string;
  image?: string;
};

export const reviews: Review[] = [
  {
    name: "Mohan Verma",
    course: "MBBS Student, Russia",
    review:
      "From counselling to visa, everything was smooth. Highly professional and transparent services.",
  },
  {
    name: "Amit Sharma",
    course: "MBBS Student, Georgia",
    review:
      "Very supportive team. They guided me at every step and made the process stress-free.",
  },
  {
    name: "Sneha Patel",
    course: "MBBS Student, Kazakhstan",
    review:
      "Affordable and reliable consultancy. I’m happy with my decision to choose them.",
  },
];