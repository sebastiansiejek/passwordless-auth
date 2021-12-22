# Bezhasłowe metody uwierzytelniania

## Przedstawienie problemu/znanych rozwiązań/algorytmów/źródeł
Aktualnie zdecydowana większość serwisów internetowych oraz wszelkiego rodzaju aplikacji, które wymagają identyfikacji użytkownika, polega na kombinacji loginu/adresu email oraz hasła. Mimo swojej popularności wykorzystywanie haseł jako metody  autentykacji ma szereg wad:
* Podatność na ataki brute-force,  słownikowe i inne
* Konieczność pamiętania wielu haseł lub korzystania z managera haseł przez użytkownika
* Konieczność przechowywania haseł użytkowników w bazie danych
* Zabezpieczenie systemu zależne jest od siły hasła ustawionego przez użytkownika
* Wysokie  wymagania stopnia skomplikowania hasła, lub konieczność jego częstej zmiany często zmniejsza jego bezpieczeństwo zamiast zwiększać
* Przy braku uwierzytelniania dwuetapowego,  uwierzytelnienie hasłem nie zapewnia sprawdzenia tożsamości (tzn. osoba trzecia znająca login i hasło jest od razu traktowana jak prawdziwy użytkownik)

Jednym z rozwiązań problemu haseł, jest podejście passwordless. Jest to grupa rozwiązań, które identyfikują i uwierzytelniają użytkownika bez wymagania wprowadzenia nazwy użytkownika i hasła. Większość implementacji passwordless bazuje na publicznym identyfikatorze użytkownika (nick, email, numer telefonu) oraz powiązaniu go z dowodem tożsamości, którym nie jest informacja zapamiętana przez użytkownika.

> [Prezentacja - bezhasłowe metody uwierzytelniania](https://docs.google.com/presentation/d/1B3U6y9bI_xBhhM0gu4j5rtFVw3Ip1hFC/edit?usp=sharing&ouid=111097248793457732997&rtpof=true&sd=true)

## Założenia projektu (wybór rozwiązania, alternatywne możliwości)
Naszym głównym założeniem projektowym było przedstawienie sposobu autoryzacji oraz autentykacji użytkownika z wykorzystaniem konta Google.
Istnieje mnóstwo alternatywnych rozwiązań, które można zastosować do autoryzacji użytkowników m.in. [FaceBook](https://developers.facebook.com/docs/facebook-login/) lub [GitHub](https://docs.github.com/en/rest/guides/basics-of-authentication). Ciekawą alternatywą dla nextjs może być natomiast [nuxtjs](https://nuxtjs.org/), który zamiast React wykorzystuje bibliotekę [Vue](https://vuejs.org/).

## Wybrane technologie realizacji problemu (język, frameworki, oprogramowanie, narzędzia)
* [Next.js](https://nextjs.org/)
  * Frontend - [React](https://reactjs.org/)
    * [TypeScript](https://www.typescriptlang.org/) - Wykorzystywany do typowania danych
    * Kod jest kompilowany do HTML, JavaScript oraz CSS, aby był zrozumiały przez przeglądarki.
  * Backend - [Node.js](https://nodejs.org/)
  * [Biblioteka do autentykacji](https://next-auth.js.org/)
> [Prezentacja o autoryzacji przez Google w Next.js](https://docs.google.com/presentation/d/15AerDC_TzEoAGQB6RW_IJK_Ie8wR_X8JGIrUVom3f2U/edit?usp=sharing)

## Motywacja wyboru stosu technologicznego / Możliwe alternatywy
Główną motywacją do wyboru tego stosu technologicznego jest nasza praktyka i doświadczenie związane z tworzeniem aplikacji webowych. Aplikacje webowe tworzone z wykorzystaniem next.js są szybkie w implementacji, a sam framework ma bardzo pochlebne opinie oraz duże wsparcie społeczności. Nadaję się zarówno dla małych, jak i dużych aplikacji. Kod jest uruchamiany w przeglądarce, co zapewnia szybką oraz stosunkowo łatwą implementację.

## Projekt interfejsu
Interfejs aplikacji jest schludny oraz przejrzysty. Zapewnia prosty dostęp do najważniejszych funkcji. Wykorzystuje natywne znaczniki HTML.
* [Aplikacja](https://passwordless-auth.vercel.app/)

## Architektura/Algorytm
### Komponenty
* [Loader](./src/components/Loader/Loader.tsx) - wyświetla się podczas ładowania danych
* [Navbar](./src/components/Navbar/Navbar.tsx) - nawigacja
* [User](./src/components/User/User.tsx) - informacje o użytkowniku, przyciski do zalogowania oraz wylogowania

### Strony
* [Home](./src/pages/index.tsx) - strona główna
* [My account](./src/pages/my-account.tsx) - strona z informacjami o zalogowanym użytkowniku
* [SSR](./src/pages/ssr.tsx) - strona dostępna tylko dla zalogowanych użytkowników. Generowana za pomocą [Server Side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering)

### API Handlers
* [api/[...nextauth]](./src/pages/api/auth/[...nextauth].ts) - obsługa endpointów do autoryzacji

### Biblioteki
* [Autentykacja](https://next-auth.js.org/)
## Ocena jakości/wydajności/bezpieczeństwa.
Czas ładowania aplikacji jest zależny głównie od przepustowości sieci nie mniej, załadowanie aplikacji nie powinno trwać dłużej niż 1 sekunda. Strona główna w teście [PageeSpeed Insights](https://pagespeed.web.dev/report?url=https%3A%2F%2Fpasswordless-auth.vercel.app%2F&hl=pl) osiąga wynik 100% zarówno na telefonie, jak i na komputerze. <br />
Wszystkie wrażliwe dane takie jak `GOOGLE_ID` oraz `GOOGLE_SECRET` są przechowywane w zmiennej środowiskowej w pliku `.env`, który nie jest dostępny tylko z poziomu serwera. Cała aplikacja działa na szyfrowanym protokole HTTPS. Do weryfikowania poprawności akcji wykonywanej przez użytkownika wykorzystujemy token CSRF. Po zalogowaniu jest też generowany unikalny token sesji, który służy do autentykacji użytkownika.

## Przykłady użycia
* [Aplikacja](https://passwordless-auth.vercel.app/)

## Linki (między innymi do repozytorium)
* [Repozytorium](https://github.com/sebastiansiejek/passwordless-auth)
* [Aplikacja](https://passwordless-auth.vercel.app/)
* [Prezentacja o autoryzacji przez Google w Next.js](https://docs.google.com/presentation/d/15AerDC_TzEoAGQB6RW_IJK_Ie8wR_X8JGIrUVom3f2U/edit?usp=sharing)
  * [Szczegóły](https://sebastiansiejek.notion.site/Ochrona-danych-7f0285972c7547a6b52f19080c9ed752)
* [Prezentacja o bezhasłowych metodach uwierzytelniania](https://docs.google.com/presentation/d/1B3U6y9bI_xBhhM0gu4j5rtFVw3Ip1hFC/edit?usp=sharing&ouid=111097248793457732997&rtpof=true&sd=true)
