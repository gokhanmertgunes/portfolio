export type WritingPost = {
  title: string;
  href: string;
  readingTime: string;
  excerpt: {
    en: string;
    tr: string;
  };
  locale?: "en" | "tr" | "all";
};

export const writingPosts: readonly WritingPost[] = [
  {
    title: "Building a Scalable Event-Driven System with Spring Boot, Kafka & Docker",
    href: "https://medium.com/@gokhanmertgunes/building-a-scalable-event-driven-system-with-spring-boot-kafka-docker-a7f67bd2c966",
    readingTime: "3 min read",
    locale: "all",
    excerpt: {
      en: "Most tutorials show how to use Kafka. Very few show how to use it in a real system. This article builds a practical event-driven architecture using Spring Boot, Kafka and Docker—based on an Event & Ticketing System scenario.",
      tr: "Çoğu içerik Kafka’yı nasıl kullanacağını gösterir; çok azı gerçek bir sistemde nasıl konumlandıracağını anlatır. Bu yazı, Spring Boot, Kafka ve Docker ile pratik bir Event & Ticketing System senaryosu üzerinden gerçekçi bir event-driven mimari kurar."
    }
  },
  {
    title: "5 Mistakes I Made as a Backend Developer (So You Don’t Have To)",
    href: "https://medium.com/@gokhanmertgunes/5-mistakes-i-made-as-a-backend-developer-so-you-dont-have-to-a55b632fbdc9",
    readingTime: "3 min read",
    locale: "all",
    excerpt: {
      en: "Backend looks clean from the outside, but the real lessons come after production issues. This post shares five mistakes I made—and what they taught me about building reliable systems.",
      tr: "Backend dışarıdan “temiz” görünür ama asıl dersler production’da bir şeyler bozulunca gelir. Bu yazıda yaptığım 5 hatayı ve bana güvenilir sistemler kurma konusunda ne öğrettiklerini paylaşıyorum."
    }
  },
  {
    title: "Why Your Microservices Architecture Is Overkill",
    href: "https://medium.com/@gokhanmertgunes/why-your-microservices-architecture-is-overkill-52f6feb85a27",
    readingTime: "3 min read",
    locale: "all",
    excerpt: {
      en: "Microservices can look “senior”, but they’re often unnecessary. This post explains why overusing microservices makes systems harder to build, debug and scale—and when you should keep things simple.",
      tr: "Microservices “senior” görünebilir ama çoğu zaman gereksizdir. Bu yazı, aşırı microservice kullanımının sistemi geliştirmeyi, debug etmeyi ve ölçeklemeyi neden zorlaştırdığını ve ne zaman sade kalman gerektiğini anlatıyor."
    }
  },
  {
    title: "RAG vs Agentic RAG: Statik Retrieval’dan Otonom AI Sistemlerine Evrim",
    href: "https://medium.com/@gokhanmertgunes/rag-vs-agentic-rag-statik-retrievaldan-otonom-ai-sistemlerine-evrim-75f3c4b2a63a",
    readingTime: "3 min read",
    locale: "all",
    excerpt: {
      en: "AI systems are evolving from “answering models” to systems that can decide and act. This article compares RAG with Agentic RAG and clarifies how the architectures differ in practice.",
      tr: "Yapay zeka sistemleri “cevap veren modeller” olmaktan çıkıp karar alan ve aksiyon alan sistemlere evriliyor. Bu yazı, RAG ile Agentic RAG’i karşılaştırarak mimari farkları pratik şekilde netleştiriyor."
    }
  }
] as const;

