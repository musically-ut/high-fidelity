I18n.defaultLocale = "en-US";
I18n.locale = window.navigator.language || 'en-US';
I18n.fallbacks = true;
I18n.translations = {
    // English by @tofumatt
    en: {
        app: {
            title: 'Podcasts',
        },
        episode: {
            episodes: 'Episodes',
            new: 'New:',
        },
        podcast: {
            add: 'Add',
            addOne: 'Want to add one?',
            addRSSFeed: 'Add RSS Feed',
            newToPodcasts: 'New to Podcasts?',
            noneFound: 'No podcasts found.',
            recommendations: 'Check out our recommendations:',
        },
        search: {
            find: 'Find',
            noResults: 'No results.',
            placeholder: 'Podcast Name or Keywords',
            searchForAPodcast: 'Search for a Podcast',
            subscribe: 'Subscribe to {{podcast}}?',
        },
        tabs: {
            myPodcasts: 'My Podcasts',
            popular: 'Popular',
            search: 'Search',
        },
    },

    // French by @AntoineTurmel
    fr: {
        app: {
            title: 'Podcasts',
        },
        episode: {
            episodes: "Episodes",
            new: 'nouveau:',
        },
        podcast: {
            add: 'Ajouter',
            addOne: 'Voulez-vous en ajouter un?',
            addRSSFeed: 'Ajouter un flux RSS',
            newToPodcasts: 'Vous ne connaissez pas de Podcasts?',
            noneFound: 'Aucun podcast trouvé.',
            recommendations: 'Voici nos recommandations:',
        },
        search: {
            find: 'chercher',
            noResults: 'Aucun résultat.',
            placeholder: 'Nom du podcast ou mots-clés',
            searchForAPodcast: 'Trouver un podcast',
            subscribe: 'S\'abonner à {{podcast}}?',
        },
        tabs: {
            myPodcasts: 'mes podcasts',
            popular: 'populaire',
            search: 'recherche',
        },
    },
    
    // Polish by @MaciejCzyzewski
    pl: {
        app: {
            title: 'Podcasty', // Transmisje
        },
        episode: {
            episodes: 'Epizody', // Fragmenty
            new: 'Nowe:',
        },
        podcast: {
            add: 'Dodaj',
            addOne: 'Chcesz jedno dodać?',
            addRSSFeed: 'Dodaj źródło RSS',
            newToPodcasts: 'Nowe do podcastu?',
            noneFound: 'Nie znaleziono podcastów.',
            recommendations: 'Sprawdź nasze rekomendacje:',
        },
        search: {
            find: 'Szukaj',
            noResults: 'Brak wyników.',
            placeholder: 'Podcast tytuł albo słowo kluczowe',
            searchForAPodcast: 'Szukaj w podcastach',
            subscribe: 'Subskrybuj {{podcast}}?',
        },
        tabs: {
            myPodcasts: 'Moje Podcasty',
            popular: 'Popularne',
            search: 'Szukaj',
        },
    },
};
