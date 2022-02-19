const ArtistTitle = (artist,search)=>{
    <Link to={{
        pathname: `/search/?q=${search}`
    }}>
        {`${artist} `}
    </Link>
}