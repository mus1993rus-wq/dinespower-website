// Lightweight i18n dictionary for DinesPower.
// Covers Header + Footer + common CTAs.
// Fallback to English for missing keys.

export type Locale = "en" | "uk" | "ru" | "de" | "fr" | "es" | "it" | "sv" | "cs" | "nl";

export const SUPPORTED_LOCALES: Locale[] = [
  "en", "uk", "ru", "de", "fr", "es", "it", "sv", "cs", "nl",
];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  uk: "Українська",
  ru: "Русский",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  sv: "Svenska",
  cs: "Čeština",
  nl: "Nederlands",
};

export interface Dictionary {
  // Header
  "header.deliveryPayment": string;
  "header.blog": string;
  "header.faqs": string;
  "header.contact": string;
  "header.allProductsTested": string;
  "header.seeLabTest": string;
  "header.searchPlaceholder": string;
  "header.verifyAuthenticity": string;
  "header.needHelp": string;
  "header.login": string;
  "header.cart": string;
  "header.officialRep": string;
  "header.officialRepBrands": string;

  // Common CTAs
  "cta.addToCart": string;
  "cta.learnMore": string;
  "cta.viewAll": string;
  "cta.askQuestion": string;
  "cta.readMore": string;
  "cta.showMore": string;

  // Product
  "product.reviews": string;
  "product.inStock": string;
  "product.writeReview": string;

  // Footer
  "footer.menu": string;
  "footer.categories": string;
  "footer.writeToUs": string;
  "footer.stillHaveQuestions": string;
  "footer.orWriteByEmail": string;
  "footer.forAllQuestions": string;
  "footer.wholesaleOrders": string;
  "footer.terms": string;
  "footer.privacy": string;
}

// Default English (source of truth)
const en: Dictionary = {
  "header.deliveryPayment": "Delivery & Payment",
  "header.blog": "Blog",
  "header.faqs": "FAQs",
  "header.contact": "Contact",
  "header.allProductsTested": "All Products Certified & Lab Tested",
  "header.seeLabTest": "See Lab Test",
  "header.searchPlaceholder": "What are you looking for?",
  "header.verifyAuthenticity": "Verify Authenticity",
  "header.needHelp": "Need Help?",
  "header.login": "Login",
  "header.cart": "Cart",
  "header.officialRep": "Official Representative Of",
  "header.officialRepBrands": "Deus Medical, Biaxol, Astera Labs",
  "cta.addToCart": "Add to cart",
  "cta.learnMore": "Learn More",
  "cta.viewAll": "View All",
  "cta.askQuestion": "Ask a Question",
  "cta.readMore": "Read more",
  "cta.showMore": "Show more",
  "product.reviews": "Reviews",
  "product.inStock": "In Stock",
  "product.writeReview": "Write a customer review",
  "footer.menu": "MENU",
  "footer.categories": "CATEGORIES",
  "footer.writeToUs": "WRITE TO US",
  "footer.stillHaveQuestions": "Still have questions? Ask via social media",
  "footer.orWriteByEmail": "Or write to us by emails",
  "footer.forAllQuestions": "For All Questions",
  "footer.wholesaleOrders": "Wholesale orders",
  "footer.terms": "Terms & Conditions",
  "footer.privacy": "Privacy Policy",
};

const uk: Partial<Dictionary> = {
  "header.deliveryPayment": "Доставка та оплата",
  "header.blog": "Блог",
  "header.faqs": "FAQ",
  "header.contact": "Контакти",
  "header.allProductsTested": "Усі продукти сертифіковані та лабораторно перевірені",
  "header.seeLabTest": "Переглянути Lab Test",
  "header.searchPlaceholder": "Що ви шукаєте?",
  "header.verifyAuthenticity": "Перевірити автентичність",
  "header.needHelp": "Потрібна допомога?",
  "header.login": "Вхід",
  "header.cart": "Кошик",
  "header.officialRep": "Офіційний представник",
  "header.officialRepBrands": "Deus Medical, Biaxol, Astera Labs",
  "cta.addToCart": "В кошик",
  "cta.learnMore": "Дізнатися більше",
  "cta.viewAll": "Переглянути всі",
  "cta.askQuestion": "Задати питання",
  "cta.readMore": "Читати далі",
  "cta.showMore": "Показати більше",
  "product.reviews": "Відгуки",
  "product.inStock": "В наявності",
  "product.writeReview": "Написати відгук",
  "footer.menu": "МЕНЮ",
  "footer.categories": "КАТЕГОРІЇ",
  "footer.writeToUs": "НАПИШІТЬ НАМ",
  "footer.stillHaveQuestions": "Ще є питання? Пишіть у соц-мережі",
  "footer.orWriteByEmail": "Або напишіть нам на email",
  "footer.forAllQuestions": "З усіх питань",
  "footer.wholesaleOrders": "Оптові замовлення",
  "footer.terms": "Умови користування",
  "footer.privacy": "Політика конфіденційності",
};

const ru: Partial<Dictionary> = {
  "header.deliveryPayment": "Доставка и оплата",
  "header.blog": "Блог",
  "header.faqs": "Вопросы",
  "header.contact": "Контакты",
  "header.allProductsTested": "Все товары сертифицированы и проверены",
  "header.seeLabTest": "Смотреть Lab Test",
  "header.searchPlaceholder": "Что вы ищете?",
  "header.verifyAuthenticity": "Проверить подлинность",
  "header.needHelp": "Нужна помощь?",
  "header.login": "Войти",
  "header.cart": "Корзина",
  "header.officialRep": "Официальный представитель",
  "header.officialRepBrands": "Deus Medical, Biaxol, Astera Labs",
  "cta.addToCart": "В корзину",
  "cta.learnMore": "Подробнее",
  "cta.viewAll": "Смотреть все",
  "cta.askQuestion": "Задать вопрос",
  "cta.readMore": "Читать далее",
  "cta.showMore": "Показать ещё",
  "product.reviews": "Отзывы",
  "product.inStock": "В наличии",
  "product.writeReview": "Написать отзыв",
  "footer.menu": "МЕНЮ",
  "footer.categories": "КАТЕГОРИИ",
  "footer.writeToUs": "НАПИШИТЕ НАМ",
  "footer.stillHaveQuestions": "Ещё есть вопросы? Пишите в соцсетях",
  "footer.orWriteByEmail": "Или напишите нам на email",
  "footer.forAllQuestions": "По всем вопросам",
  "footer.wholesaleOrders": "Оптовые заказы",
  "footer.terms": "Условия использования",
  "footer.privacy": "Политика конфиденциальности",
};

const dictionaries: Record<Locale, Partial<Dictionary>> = {
  en,
  uk,
  ru,
  de: {},
  fr: {},
  es: {},
  it: {},
  sv: {},
  cs: {},
  nl: {},
};

export function getDict(locale: Locale): Dictionary {
  // Merge partial locale on top of English defaults
  return { ...en, ...dictionaries[locale] } as Dictionary;
}
