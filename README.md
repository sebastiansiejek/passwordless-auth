# Bezhasłowe metody uwierzytelniania.

## Przedstawienie problemu/znanych rozwiązań/algorytmów/źródeł.
Aktualnie zdecydowana większość serwisów internetowych oraz wszelkiego rodzaju aplikacji, które wymagają identyfikacji użytkownika, polega kombinacji loginu/adresu email oraz hasła. Mimo swojej popularności, wykorzystywanie haseł jako metody  autentykacji ma szereg wad:
* Podatność na ataki brute-force,  słownikowe i inne
* Konieczność pamiętania wielu haseł lub korzystania z managera haseł przez użytkownika
* Konieczność przechowywania haseł użytkowników w bazie danych
* Zabezpieczenie systemu zależne jest od siły hasła ustawionego przez użytkownika
* Wysokie  wymagania stopnia skomplikowania hasła lub konieczność jego częstej zmiany często zmniejsza jego bezpieczeństwo, a nie zwiększa
* Przy braku uwierzytelniania dwuetapowego,  uwierzytelnienie hasłem nie zapewnia sprawdzenia tożsamości (tzn. osoba trzecia znająca login i hasło jest od razu traktowana jak prawdziwy użytkownik)

Jednym z rozwiązań problemu haseł, jest podejście passwordless. Jest to grupa rozwiązań, które identyfikują i uwierzytelniają użytkownika bez wymagania wprowadzenia nazwy użytkownika i hasła. Większość implementacji passwordless bazuje na publicznym identyfikatorze użytkownika (nick, email, numer telefonu) oraz powiązaniu go z dowodem tożsamości, którym nie jest informacja zapamiętana przez użytkownika..
Dowody tożsamości zwykle dzielone są na dwie kategorie:

> [Prezentacja o bezhasłowych metodach uwierzytelniania](https://docs.google.com/presentation/d/1B3U6y9bI_xBhhM0gu4j5rtFVw3Ip1hFC/edit?usp=sharing&ouid=111097248793457732997&rtpof=true&sd=true)

## Założenia projektu (wybór rozwiązania, czy są możliwe alternatywne rozwiązania).
Naszym głównym założeniem projektu było przedstawienie sposobu autoryzacji oraz autentykacji użytkownika z wykorzystaniem konta Google.
Istnieje mnóstwo alternatywnych rozwiązań, które można zastosować do autoryzacji użytkowników m.in. [FaceBook](https://developers.facebook.com/docs/facebook-login/) lub [GitHub](https://docs.github.com/en/rest/guides/basics-of-authentication). Ciekawą alternatywwą dla nextjs może być [nuxtjs](https://nuxtjs.org/), który zamiast React wykorzystuje bibliotekę [Vue](https://vuejs.org/).

## Wybrane technologie realizacji problemu - język, frameworki, oprogramowanie, narzędzia.
* [Next.js](https://nextjs.org/)
  * Frontend - [React](https://reactjs.org/)
    * [TypeScript](https://www.typescriptlang.org/) - Umożliwia typowanie danych
    * Kod bo zbudowaniu jest kompilowany do HTML, JavaScript oraz CSS, aby był zruzumiały dla przeglądarek.
  * Backend - [Node.js](https://nodejs.org/)
  * [Biblioteka do autentykacji](https://next-auth.js.org/)
> [Prezentacja o autoryzacji przez Google w Next.js](https://docs.google.com/presentation/d/15AerDC_TzEoAGQB6RW_IJK_Ie8wR_X8JGIrUVom3f2U/edit?usp=sharing)

## Motywacja wyboru stosu technologicznego / Możliwe alternatywy.
Główną motwacją nad wyborem tego stosu technologicznego jest nasza praktyka i doświadczenie związaną z tworzeniem aplikacji webowych. Aplikacje webowe tworzone z wykorzystaniem next.js są szybkie w implementacji, a sam framework mam bardzo duże community. Nadaję się za równo dla dużych jak i małych aplikacji. Kod jest uruchamiany w przeglądarce co zapewnia szybką oraz stosunkowo łatwą implementację.

## Projekt interfejsu.
Interfejs aplikacji jest schludny oraz przejrzysty. Zapewnia prosty dostęp do najważniejszych funkcji. Wykorzystuje natywne znaczniki HTML.
* [Aplikacja](https://passwordless-auth.vercel.app/)

## Architektura/Algorytm.

## Ocena jakości/wydajności/bezpieczeństwa.

## Przykłady użycia.
[Aplikacja](https://passwordless-auth.vercel.app/)

## Linki (między innymi do repozytorium)
* [Repozytorium](https://github.com/sebastiansiejek/passwordless-auth)
* [Aplikacja](https://passwordless-auth.vercel.app/)
* [Prezentacja o autoryzacji przez Google w Next.js](https://docs.google.com/presentation/d/15AerDC_TzEoAGQB6RW_IJK_Ie8wR_X8JGIrUVom3f2U/edit?usp=sharing)
* [Prezentacja o bezhasłowych metodach uwierzytelniania](https://docs.google.com/presentation/d/1B3U6y9bI_xBhhM0gu4j5rtFVw3Ip1hFC/edit?usp=sharing&ouid=111097248793457732997&rtpof=true&sd=true)