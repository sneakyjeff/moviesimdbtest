$(() => {
    $('#searchForm').on('submit', (e) => {
        e.preventDefault();
        let searchTermString = $('#searchText').val();
        fetchListOfMovies(searchTermString);
    });
})

let fetchListOfMovies = (searchTermString) => {
    axios.get(baseURL).then((response) => {
        let titleOfMoviesResponse = response.data.Search;
        let html = '';

        $.each(titleOfMoviesResponse, (index, movie) => {
            html += `
                <div class="col-md-3>
                    <div class="well text-center>
                        <img src="${movie.Poster}">
                        <h5>${movie.Title}</h5>
                    </div>
                </div>
            `
        });

        $('#movies').html(html);
    }).catch((err) => {
        console.log(err);
    })
    
}