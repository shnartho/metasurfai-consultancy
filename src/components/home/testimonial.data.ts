import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Transformed Our Business Operations',
    content:
      'MetaSurf AI helped us implement AI solutions that streamlined our data processing workflow. Their consultation was thorough and the results exceeded our expectations. We saw a 40% increase in efficiency within three months.',
    user: {
      id: 1,
      name: 'Sam Chen',
      professional: 'CTO, TechFlow Solutions',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Expert AI Implementation',
    content:
      'Their expertise in AI integration was invaluable. The team provided clear guidance on implementing machine learning models for our customer service platform. The ROI has been remarkable, with customer satisfaction scores improving by 60%.',
    user: {
      id: 1,
      name: 'Michael Rodriguez',
      professional: 'Director of Innovation',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Game-Changing AI Strategy',
    content:
      "MetaSurf AI's consultation helped us develop a comprehensive AI roadmap. Their insights into predictive analytics transformed our decision-making process. They truly understand both the technical and business aspects of AI implementation.",
    user: {
      id: 1,
      name: 'John Watson',
      professional: 'Operations Manager',
      photo: '3.jpg',
    },
  },
]
