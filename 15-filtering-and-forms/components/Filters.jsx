import React from 'react';

const Filters = () => (
    <form>
        <div>
            <label htmlFor="name">Search by name</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="e.j. Wonder Woman"
            />
            <fieldset>
                <legend>Gender</legend>
                <input type="radio" name="gender" value="male" id="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" value="female" id="female" />
                <label htmlFor="female">Female</label>
            </fieldset>
            <fieldset>
                <legend>Type</legend>
                <input type="radio" name="type" value="villain" id="villain" />
                <label htmlFor="villain">Villain</label>
                <input type="radio" name="type" value="hero" id="hero" />
                <label htmlFor="hero">Hero</label>
            </fieldset>
            <fieldset>
                <legend>
                    <label htmlFor="minAge">Min Age: 1</label>
                </legend>
                <input
                    type="range"
                    id="minAge"
                    min="1"
                    max="100"
                    step="1"
                    defaultValue="1"
                />
            </fieldset>
            <fieldset>
                <legend>
                    <label htmlFor="media">Media</label>
                </legend>
                <div className="select">
                    <select name="media" id="media">
                        <option value="" disabled selected>
                            Select a media
                        </option>
                        <option value="tv">TV</option>
                        <option value="movie">Movie</option>
                        <option value="comic">Comic</option>
                        <option value="Videogame">Videogame</option>
                    </select>
                </div>
            </fieldset>
        </div>
    </form>
);

export default Filters;
