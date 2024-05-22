CREATE TABLE movies (
    id INT PRIMARY KEY,
    titleimg VARCHAR(255),
    bgimg VARCHAR(255),
    previewimg VARCHAR(255),
    video VARCHAR(255),
    title VARCHAR(255),
    year VARCHAR(4),
    date VARCHAR(50),
    agelimit VARCHAR(10),
    length VARCHAR(10),
    category VARCHAR(50),
    type VARCHAR(50),
    description TEXT,
    active BOOLEAN
);


INSERT INTO movies (id, titleimg, bgimg, previewimg, video, title, year, date, agelimit, length, category, type, description, active) VALUES
(1, '../assets/movies/transformer-title.png', '../assets/movies/bg-transformer.jpg', '../assets/movies/transformer.jpg', 'https://www.youtube.com/embed/TxPNrwbuxN0', 'Transformer', '2023', '18th September', '15+', '2h 07min', 'Adventure', 'coming', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.', true);

INSERT INTO movies (id, titleimg, bgimg, previewimg, video, title, year, date, agelimit, length, category, type, description, active) VALUES
(2, '../assets/movies/meg-2-title.png', '../assets/movies/bg-meg-2.jpeg', '../assets/movies/meg-2.jpg', 'https://www.youtube.com/embed/dG91B3hHyY4', 'Meg 2', '2023', '04th August', '16+', '1h 56min', 'Thriller', 'coming', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.', false);

INSERT INTO movies (id, titleimg, bgimg, previewimg, video, title, year, date, agelimit, length, category, type, description, active) VALUES
(3, '../assets/movies/fast-x-title.png', '../assets/movies/bg-fast-x.jpeg', '../assets/movies/fast-x.jpeg', 'https://www.youtube.com/embed/32RAq6JzY-w', 'Fast X', '2023', '04th October', '12+', '2h 21min', 'Action', 'coming', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.', false);

INSERT INTO movies (id, titleimg, bgimg, previewimg, video, title, year, date, agelimit, length, category, type, description, active) VALUES
(4, '../assets/movies/jailer-title.png', '../assets/movies/bg-jailer.jpeg', '../assets/movies/jailer.jpg', 'https://www.youtube.com/embed/lshAqOT7BB8', 'Jailer', '2023', '09th November', '15+', '2h 48min', 'Action', 'coming', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.', false);

INSERT INTO movies (id, titleimg, bgimg, previewimg, video, title, year, date, agelimit, length, category, type, description, active) VALUES
(5, '../assets/movies/beautiful-disaster-title.png', '../assets/movies/bg-beautiful-disaster.jpeg', '../assets/movies/beautiful-disaster.jpeg', 'https://www.youtube.com/embed/nvaenzyXl4o', 'Beautiful Disaster', '2023', '12th November', '12+', '1h 45min', 'Romance', 'coming', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.', false);

INSERT INTO movies (id, titleimg, bgimg, previewimg, video, title, year, date, agelimit, length, category, type, description, active) VALUES
(6, '../assets/movies/ape-title.png', '../assets/movies/bg-ape.jpeg', '../assets/movies/ape.jpg', 'https://www.youtube.com/embed/dtyPh5yCoWg', 'Ape vs. Mecha Ape', '2023', '30th December', '14+', '2h 45min', 'Thriller', 'coming', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.', false);

INSERT INTO movies (id, titleimg, bgimg, previewimg, video, title, year, date, agelimit, length, category, type, description, active) VALUES
(7, '../assets/movies/assassin-title.png', '../assets/movies/bg-assassin.jpg', '../assets/movies/assassin.jpg', 'https://www.youtube.com/embed/qiUATuIhUw8', 'Assassin', '2023', '17th September', '16+', '1h 28min', 'Thriller', 'coming', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.', false);

INSERT INTO movies (id, titleimg, bgimg, previewimg, video, title, year, date, agelimit, length, category, type, description, active) VALUES
(8, '../assets/movies/no-hard-feelings-title.png', '../assets/movies/bg-no-hard-feelings.jpeg', '../assets/movies/no-hard-feelings.jpeg', 'https://www.youtube.com/embed/7psP7xBEa28', 'No Hard Feelings', '2023', '06th October', '14+', '1h 43min', 'Romance', 'coming', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.', false);

INSERT INTO movies (id, titleimg, bgimg, previewimg, video, title, year, date, agelimit, length, category, type, description, active) VALUES
(9, '../assets/movies/peter-pan-and-wendy-title.png', '../assets/movies/bg-peter-pan-and-wendy.jpeg', '../assets/movies/peter-pan-and-wendy.jpg', 'https://www.youtube.com/embed/9Ji5U2sTlLU', 'Peter Pan & Wendy', '2023', '14th October', '12+', '1h 49min', 'Adventure', 'coming', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.', false);

INSERT INTO movies (id, titleimg, bgimg, previewimg, video, title, year, date, agelimit, length, category, type, description, active) VALUES
(10, '../assets/movies/heart-of-stone-title.png', '../assets/movies/bg-heart-of-stone.jpeg', '../assets/movies/heart-of-stone.jpg', 'https://www.youtube.com/embed/XuDwndGaCFo', 'Heart of Stone', '2023', '09th November', '15+', '2h 02min', 'Action', 'coming', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.', false);
