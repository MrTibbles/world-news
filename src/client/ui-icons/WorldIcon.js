import React from "react";
import PropTypes from "prop-types";

const WorldIcon = ({ color = "#000000" }) => (
  <svg viewBox="0 0 87 87">
    <g fill={color} fillRule="nonzero">
      <path d="M86.534 43.539l-.002-.335a42.898 42.898 0 0 0-3.395-16.45 43.056 43.056 0 0 0-9.263-13.738 43.714 43.714 0 0 0-3.918-3.476l.018-.021a43.024 43.024 0 0 0-17.399-8.205l-.009.034a43.342 43.342 0 0 0-9.252-.99c-3.782 0-7.491.48-11.083 1.433l-.009-.034a42.923 42.923 0 0 0-13.307 6.104A43.329 43.329 0 0 0 8.52 17.897l.016.011a43.038 43.038 0 0 0-5.047 8.848 42.94 42.94 0 0 0-3.396 16.54l-.002.245v.04a42.975 42.975 0 0 0 3.397 16.824 43.057 43.057 0 0 0 9.263 13.737 43.07 43.07 0 0 0 13.737 9.262 42.946 42.946 0 0 0 16.824 3.397 42.958 42.958 0 0 0 16.822-3.397 43.053 43.053 0 0 0 13.738-9.262 43.052 43.052 0 0 0 9.263-13.737 42.938 42.938 0 0 0 3.396-16.824v-.019c.003-.01.003-.017.003-.023zm-43.22 41.72c-23 0-41.711-18.705-41.721-41.7l.001-.238c.053-3.944 1.506-10.187 2.071-12.473v.992c0 .58.397 1.069.934 1.209-.013.315-.016.851.075 1.41.147.92.77 1.811.84 1.91.069.097.152.352.152.471v3a1.25 1.25 0 0 0 1.028 1.23c.113.44.557 1.019 1.72 1.019.641 0 1.09.403 1.121.432.139.14.347.43.432.602l.554 1.105c.249.499.836.862 1.393.862h1.001a.701.701 0 0 1 .324.133l1.292 1.294c.337.336.902.57 1.379.572a.393.393 0 0 1 .162.087l1.442 2.163c.179.269.497.656.724.884l1.293 1.293a.703.703 0 0 1 .134.324v.986a.25.25 0 0 1-.053.088l-.103.055a3.087 3.087 0 0 0-.996.889l-.438.647c-.237.35-.41.911-.41 1.334 0 .478.236 1.047.573 1.384l.559.558-.102.351c-.099.34-.183.633-.006.951a.81.81 0 0 0 .459.375c.024.033.063.095.115.203.123.258.102.338.094.371-.073.286-.029.534.13.738.242.312.562.319.9.32.227.079.768.668 1.126 1.23.141.22.354.411.6.547-.014.172.018.371.093.594.095.281.271.678.538 1.214.921 1.842.921 2.036.921 2.164 0 .354.086.875.197 1.212l.683 2.051c.062.185.121.543.121.737v1a.694.694 0 0 1-.136.323l-.293.294a1.019 1.019 0 0 1-.127.113.688.688 0 0 1 .664 0 .731.731 0 0 1 .39.593h-1.499v3.177c0 1.109.792 1.745.897 1.825a.474.474 0 0 1 .104.206v.469c0 .61.439 1.121 1.021 1.229.106.58.616 1.021 1.228 1.021h1.001c.467 0 1.022-.226 1.361-.553.339-.296.794-.667.924-.743.252-.123 2.068-1.062 1.963-2.509-.042-.566.392-1.62.676-2.149.094-.177.316-.478.459-.619l.646-.646.269-.269.009-.008.007-.007-.25-.249.362-.617c.413-.703 1.023-1.262 1.351-1.563.087-.08.156-.144.213-.2a.96.96 0 0 0 .243-.385c.1-.097.241-.225.373-.338a.89.89 0 0 1 .395-.146c.432 0 1.249-.365 1.249-1.749 0-.597.429-1.678.697-2.218l1-2c.087-.175.299-.469.437-.606l1.294-1.293c.347-.348.521-.92.444-1.413a.807.807 0 0 0 .165-.396.759.759 0 0 0-.205-.596c.593-.593 1.087-1.112.839-1.709-.143-.345-.452-.521-.917-.521-.078 0-.327-.019-.538-.094-.216-.076-.216-.137-.216-.156 0-1.023 0-2.297-1.551-2.723-.841-.231-1.353-.589-1.354-.59a1.74 1.74 0 0 1-.398-.47l-.552-1.105a4.538 4.538 0 0 0-.718-.996l-.294-.292a2.116 2.116 0 0 0-1.384-.574c-.16 0-.469-.072-.611-.144l-2.105-1.054a3.31 3.31 0 0 0-1.033-.288c-.015-.56-.535-.908-1.023-1.048-.066-.02-1.634-.467-2.727-.467h-2.5c-.317 0-.608.119-.829.316a12.694 12.694 0 0 1-.211-.158c-1.077-.836-1.694-1.005-1.808-1.03a1.34 1.34 0 0 1-.476-.262l-.292-.288a.707.707 0 0 1-.136-.323c0-.131-.037-.468-.396-.764-.271-.224-.671-.379-1.223-.476-.128-.021-.376-.066-.629-.009a6.755 6.755 0 0 0-.104-.065c-1.188-.739-1.29-.89-1.379-1.021l-.116-.171a7.097 7.097 0 0 0-.725-.879l-.293-.292a9.636 9.636 0 0 0-.826-.724l-1.189-.907.016-.016 1.294-1.293a.685.685 0 0 1 .323-.134.69.69 0 0 1 .322.134l.293.293c.251.251.68.559.996.718l1.104.553c.444.222 1.06.229 1.516.023l1.325-.467.119-.12a4.54 4.54 0 0 0 .686-.933l.888-1.205v-1.231a.228.228 0 0 1 .047-.074l1.091-.546c.145-.072.452-.145.612-.145.231 0 .635.035.862.075.106.02.482.057.842-.243.365-.307.545-.82.546-1.569.192-.076.466-.218.679-.553.21-.334.313-.795.322-1.45l.016-1.281c.406-.065.839-.273 1.117-.552l1.293-1.293c.333-.333.439-.814.318-1.244a6.559 6.559 0 0 0 1.41-.675l.211.212c.338.337.906.573 1.385.573.478 0 1.045-.236 1.383-.573l.293-.293a.688.688 0 0 1 .324-.134h.736a.838.838 0 0 0 .717-.394c.192-.305.188-.707-.015-1.131l-.048-.098a8.724 8.724 0 0 0-.551-.962l-.439-.65a1.27 1.27 0 0 1-.152-.309c-.029-.509-.476-.909-.86-1.102l-1.105-.553a2.969 2.969 0 0 1-.605-.437l-.294-.292a.711.711 0 0 1-.134-.325c0-.477-.236-1.046-.573-1.383L31.3 18.165a2.114 2.114 0 0 0-1.385-.574h-3c-.436 0-.787.208-.94.557a.885.885 0 0 0-.041.6c-.613.341-.846.64-.931.792a3.47 3.47 0 0 1-.473.625l-.293.292a.697.697 0 0 1-.322.135H22.14a1.251 1.251 0 0 0-.976-.975v-2.072c.385-.053.814-.215 1.099-.425l1.194-.878c.101-.075.552-.428.677-.899a.547.547 0 0 1 .071-.046l.113-.059c.268-.14.674-.379.926-.543l.69-.452c.12-.079.251-.136.309-.153.255-.02.5-.145.694-.273.085.154.187.295.301.409l.293.293a.695.695 0 0 1 .134.323c0 .689.561 1.25 1.251 1.25h2a1.66 1.66 0 0 0 1.396-.843l.061-.115a.374.374 0 0 1 .049-.075c.441-.127.743-.6.743-1.217 0-.087.081-.295.141-.358.279-.304.506-.796.302-1.265-.125-.286-.434-.627-1.192-.627-.591 0-1.097-.437-1.125-.462a34.3 34.3 0 0 1-.698-.672l-.293-.293a.704.704 0 0 1-.133-.323c0-.689-.561-1.25-1.25-1.25h-.313a.895.895 0 0 0-.058-.192c-.295-.712-1.242-.808-2.13-.808-1.749 0-2.634.457-2.996.716-.3-.225-.706-.368-1.105-.204-.264.11-.573.373-.637.998-.156.016-.343.06-.521.179-.224.149-.49.454-.49 1.062 0 .11-.007.192-.018.25h-.731c-.479 0-1.047.235-1.385.573l-3.292 3.293a.71.71 0 0 1-.323.134h-1.001c-.433 0-1.25.365-1.25 1.75 0 .132-.013.222-.022.28a1.252 1.252 0 0 0-.947.946 1.417 1.417 0 0 1-.28.023H10.7c5.305-6.644 12.593-11.638 20.959-14.075l-.01 1.32c-.003.28.001.732.008 1.014v.009c.006.271.011.712.011.983 0 .102.025.459.35.777.307.3.774.459 1.385.472.495.01 1.126.453 1.386.682a25.032 25.032 0 0 0 .342.691c.196.388.393.772.393.772.213.415.659.734 1.123.827-.877.954-.979 1.553-.979 1.776v3.001c0 .442.213.795.567.941.188.079.39.088.584.031.056.146.107.376.151.567.073.321.146.653.293.946.333.665.866.764 1.156.764.094 0 .145.017.163.027.097.328.289.764.458 1.041.379.614.873.889 1.357.751.771-.217.771-1.2.771-1.569 0-1.321.545-2.13.564-2.159.253-.349.435-.911.435-1.341 0-.188.032-.507.072-.727a.53.53 0 0 1 .179-.023c1.109 0 1.746-.792 1.826-.897a.46.46 0 0 1 .207-.103h.467c.442 0 .794-.212.942-.566a.878.878 0 0 0 .056-.474 3.243 3.243 0 0 0 1.679-.826l2.001-2a.691.691 0 0 1 .322-.134c.689 0 1.25-.561 1.25-1.25a.701.701 0 0 1 .134-.323l.293-.293c.389-.389.573-.77.573-1.884 0-.597.428-1.677.698-2.218.147-.297.262-.729.293-1.093a41.572 41.572 0 0 1 15.183 7.186c-.216.195-.432.362-.573.396-1.09.268-1.54.77-1.619.868-.156.193-.439.507-.615.684l-1.293 1.293c-.097.097-.221.262-.563.727-.268.363-.855 1.164-1.119 1.446-.452.124-.802.52-.876 1.011-.452.1-.912.462-1.008 1.112-.052.357.082.669.224.933-.357.094-.633.224-.835.392-.358.297-.396.633-.396.764 0 .688.561 1.25 1.249 1.25H62.7c.073.25.253.457.498.558.253.104.502.082.748-.02-.181.188-.282.44-.282.712 0 .034 0 .092-.069.131a2.007 2.007 0 0 0-1.05 1.048c-.038.071-.096.071-.131.071-.898 0-1.38.639-1.523 1.016a2.12 2.12 0 0 1-.359.558l-1.294 1.293c-.195.195-.498.52-.69.737l-.642.598a4.316 4.316 0 0 0-.603.659c-.077.104-.098.131-.298.261-.628.41-.858.691-.927.793-.13.188-.385.496-.547.658l-.292.293a.709.709 0 0 1-.324.135c-.689 0-1.25.561-1.25 1.25v1c0 .477.235 1.046.573 1.384l.293.293c.104.104.256.364.296.507l.011.036c.056.2.108.572.108.775a.521.521 0 0 1-.106.222l-.493.384c-.241.188-.6.507-.816.723l-.293.292a4.5 4.5 0 0 0-.716.994c-.242.477-.778 1.141-1.107 1.141-1.384 0-1.75.818-1.75 1.25v1.5c0 .377-.228.782-.47 1.212-.328.58-.699 1.237-.506 1.978.079.296.032.712-.017 1.151-.063.554-.132 1.181.012 1.822.055.249.015.329-.019.393-.153.301-.153.58 0 .83.238.388.615.388.979.388h1.271c.081.002.272.08.33.136l1.288 1.272c.117.116.295.392.353.547a1.622 1.622 0 0 0 1.529 1.021h1.642c.096 0 .388.05.597.119l2.051.684c.33.11.837.193 1.191.196.014.007.033.02.046.029l.029.067c.116.264.319.688.452.943l.994 1.914c-.139.243-.189.563-.135.906l.314 2.013c.055.347.215.846.372 1.16l1 1.999c.27.541.696 1.621.696 2.218v8.001c0 1.384.818 1.749 1.25 1.749h1a.705.705 0 0 1 .324.134c.302.303.796.554 1.279.354.295-.123.646-.437.646-1.238 0-.6.108-.977.197-1.151a.76.76 0 0 0 .701.344c.194-.017.543-.119.702-.621.027-.085.059-.201.104-.377.123-.454.928-1.045 1.434-1.3a2.497 2.497 0 0 0 1.007-1.007l.552-1.105a3.24 3.24 0 0 0 .304-1.282v-.5c0-.332.049-1.124.513-1.297 1.173-.439 1.488-1.592 1.488-2.203 0-.159.071-.469.144-.611l.552-1.105a.779.779 0 0 1 .285-.256 1.625 1.625 0 0 0 1.02-1.527c.001-.255.349-1.306.745-2.248.146-.348.254-.874.254-1.251 0-.082.077-.266.133-.324l1.294-1.293c.337-.337.573-.906.573-1.384V48.84c0-.689-.561-1.251-1.251-1.251-.182 0-.525-.064-.695-.13-.064-.024-1.598-.616-2.639-.852a6.992 6.992 0 0 1-.414-.102v-3.167c0-.941.112-1.364.173-1.524a1.45 1.45 0 0 0 .309-.172c.005.008.013.014.018.021v.142l1.256 1.099c.948.828 1.595 1.553 1.601 1.559a.828.828 0 0 1 .143.377c0 .477.236 1.046.573 1.383l.293.294c.338.337.907.572 1.384.572h1a2.12 2.12 0 0 0 1.385-.572l.293-.294c.389-.388.572-.77.572-1.884v-.56a.898.898 0 0 0 .109-.137c.198-.3.226-.681.074-1.049-.051-.13-.076-.337-.036-.413.02-.031.103-.077.247-.104a4.92 4.92 0 0 0 .439-.106c.014.354.029.82.034 1.246l.002.343c-.012 22.995-18.722 41.7-41.721 41.7zM9.555 19.09h1.86c1.172 0 1.614-.587 1.723-1.028.44-.108 1.028-.55 1.028-1.722 0-.111.007-.192.018-.25h.732c.477 0 1.046-.236 1.383-.573l3.293-3.293a.71.71 0 0 1 .324-.134h1c.405 0 1.152-.323 1.24-1.511a1.054 1.054 0 0 0 .936-.74 1.243 1.243 0 0 0 1.188-.305c.055-.041.625-.445 2.135-.445.206 0 .368.007.495.019-.013.14.007.28.063.415.146.354.499.566.942.566h.77c.063.414.273.854.553 1.134l.293.292c.199.2.531.521.739.714.079.073.69.619 1.576.802a2.096 2.096 0 0 0-.178.709c-.271.162-.487.433-.623.692l-.055.104a.257.257 0 0 1-.089.054h-1.758c-.063-.414-.273-.854-.552-1.134l-.294-.293a.697.697 0 0 1-.133-.324c0-.441-.213-.794-.567-.94-.355-.148-.754-.049-1.066.265l-.294.293a.896.896 0 0 1-.184.142c-.408.05-.852.328-.942.389l-.689.452c-.209.137-.575.352-.797.467l-.113.06c-.362.188-.745.53-.83.959a.756.756 0 0 1-.114.108l-1.195.878c-.093.069-.342.15-.457.15-.714 0-1.251.437-1.251 1.016v2.764c0 .611.44 1.121 1.021 1.229a1.25 1.25 0 0 0 1.229 1.021h2a2.11 2.11 0 0 0 1.384-.573l.294-.293c.229-.23.519-.609.691-.905.038-.037.169-.155.475-.313.449-.231.715-.54.791-.916h2.365c.08.001.266.078.323.134l1.293 1.293a.7.7 0 0 1 .134.322c0 .479.235 1.048.573 1.385l.293.293c.251.25.68.559.996.718l1.105.553a.4.4 0 0 1 .055.033c.082.415.352.823.387.876l.439.649c.047.07.105.163.164.263-.418.061-.862.271-1.146.554l-.293.293a.7.7 0 0 1-.323.135.69.69 0 0 1-.323-.134l-.294-.294a1.378 1.378 0 0 0-1.717-.166c-.007.005-.71.47-1.334.612-.676.154-.918.521-1.005.804-.102.338-.01.658.143.896l-1.147 1.147a.692.692 0 0 1-.311.134H26.7l-.035 2.739c-.006.397-.053.573-.076.638l-.036.013c-.413.151-.889.441-.889 1.36 0 .125-.007.222-.017.295a7.51 7.51 0 0 0-.733-.045 3.26 3.26 0 0 0-1.283.302l-1.104.553a1.64 1.64 0 0 0-.861 1.396v.753l-.669.904-.029.058a2.877 2.877 0 0 1-.334.492l-1.065.376-.037.018a.431.431 0 0 1-.231 0l-1.102-.551a2.869 2.869 0 0 1-.605-.437l-.294-.293a2.114 2.114 0 0 0-1.383-.572 2.12 2.12 0 0 0-1.385.572l-1.292 1.293c-.097.097-.574.601-.574 1.121 0 .579.578 1.048.692 1.136l1.206.921c.19.145.505.421.676.591l.292.293c.161.16.415.469.543.656l.115.173c.229.338.439.59 1.829 1.454.256.159.41.255.512.315.069.042.12.068.163.089a.77.77 0 0 0 .818-.078c.082.021.144.04.19.058.077.385.278.781.536 1.04l.293.292c.29.29.787.566 1.189.661.047.015.466.159 1.235.755.741.576 1.268.861 1.761.62a.805.805 0 0 0 .406-.462h2.292c.697 0 1.805.267 2.251.39v.109c0 .579.524 1 1.25 1 .16 0 .468.073.611.146l2.105 1.052c.352.176.89.304 1.281.304a.676.676 0 0 1 .323.134l.294.292c.138.138.35.433.438.606l.552 1.105c.177.354.539.779.858 1.013.072.053.738.521 1.837.822.385.105.448.155.448 1.276 0 .705.417 1.262 1.146 1.545-.233.242-.677.773-.49 1.397a.986.986 0 0 0 .174.337c.002.177.035.334.062.43a.306.306 0 0 1-.031.122l-1.286 1.285c-.252.251-.56.679-.718.996l-.999 2c-.089.175-.856 1.744-.856 2.889 0 .126-.01.214-.022.271-.391.063-.818.246-1.095.481-.008.007-.185.158-.36.324-.178.166-.395.37-.495.622l-.015.014c-.385.353-1.101 1.011-1.629 1.906l-1.01 1.717a4.73 4.73 0 0 0-.521.749 8.873 8.873 0 0 0-.328.693l-.16.272.062-.03c-.237.6-.472 1.381-.424 2.033.02.269-.601.796-1.127 1.053-.281.135-.844.605-1.265.975l-.037.034a.706.706 0 0 1-.322.134h-.776a1.258 1.258 0 0 0-.975-.976v-.247c0-.507-.294-1.096-.699-1.4-.003-.002-.301-.248-.301-.627v-2.694a4.77 4.77 0 0 0 .134-.129l.294-.293c.337-.338.572-.906.572-1.384v-1c0-.354-.085-.875-.196-1.211l-.684-2.052a2.979 2.979 0 0 1-.12-.737c0-.444-.048-.772-1.078-2.835-.08-.159-.147-.296-.202-.414.18-.182.281-.444.281-.751 0-.687-.558-1.245-1.243-1.25a.338.338 0 0 1-.147-.081 8.53 8.53 0 0 0-.655-.871c-.453-.522-.877-.847-1.284-.979a2.59 2.59 0 0 0-.218-.64 2.247 2.247 0 0 0-.432-.648l.298-1.022-1.185-1.184a.694.694 0 0 1-.135-.324c0-.126.081-.388.151-.492l.439-.648c.085-.125.315-.332.451-.402l.114-.06c.489-.257.843-.845.843-1.397V51.84c0-.478-.233-1.047-.571-1.385l-1.294-1.292a5.447 5.447 0 0 1-.537-.656l-1.445-2.167c-.289-.435-.878-.751-1.4-.751a.69.69 0 0 1-.323-.134l-1.294-1.293a2.112 2.112 0 0 0-1.383-.572h-.985a.207.207 0 0 1-.074-.047l-.546-1.091a4.456 4.456 0 0 0-.718-.997 3.236 3.236 0 0 0-2.178-.865 1.37 1.37 0 0 1-.279-.024 1.254 1.254 0 0 0-.97-.951V36.84a2.58 2.58 0 0 0-.432-1.343c-.123-.176-.5-.787-.578-1.276-.106-.66-.046-1.304-.046-1.308a1.197 1.197 0 0 0-.3-.93 1.205 1.205 0 0 0-.646-.368v-.775c0-.487-.249-1.06-.608-1.391l-.375-.347A41.77 41.77 0 0 1 9.555 19.09zM34.67 8.426c.013.081.036.161.07.242a.748.748 0 0 1-.07-.242zm50.246 31.989c-.05.021-.277.117-.645.189-.754.146-1.114.555-1.282.872-.205.385-.219.793-.177 1.113h-.148v1.75c0 .623-.07.754-.071.76a.87.87 0 0 1-.063.064l-.292.292a.703.703 0 0 1-.324.134h-1a.7.7 0 0 1-.323-.134l-.292-.292a.693.693 0 0 1-.134-.323c0-.462-.215-1.027-.521-1.372a20.995 20.995 0 0 0-1.735-1.693l-.873-.762a2.655 2.655 0 0 0-.444-.558l-.294-.293c-.481-.482-.932-.369-1.102-.298a.842.842 0 0 0-.498.581c-.198.063-.495.235-.712.72-.215.482-.32 1.193-.32 2.174v3.001c0 .44 0 .855.332 1.204.282.296.659.393 1.252.527.934.21 2.414.781 2.43.787.268.104.654.188.985.218v4.763a.708.708 0 0 1-.133.324l-1.294 1.292a2.12 2.12 0 0 0-.572 1.385c0 .175-.067.507-.136.67-.203.481-.864 2.109-.864 2.829 0 .036 0 .094-.068.131-.431.17-.872.57-1.076.981l-.554 1.105a3.259 3.259 0 0 0-.302 1.282c0 .007-.015.611-.514.798-.944.354-1.487 1.339-1.487 2.702v.5c0 .161-.072.469-.145.612l-.552 1.105a1.064 1.064 0 0 1-.336.335c-.162.081-1.406.728-1.982 1.716a1.497 1.497 0 0 0-.234-.018c-.761 0-1.567.583-1.724 2.173a2.021 2.021 0 0 0-.776-.174h-.731a1.46 1.46 0 0 1-.019-.249v-8.001c0-1.144-.769-2.713-.855-2.888l-1.001-2a3.213 3.213 0 0 1-.23-.722l-.297-1.892a.773.773 0 0 0 .117-.151c.188-.31.171-.713-.048-1.137l-1.097-2.112a16.918 16.918 0 0 1-.412-.859l-.039-.086a1.58 1.58 0 0 0-1.387-.903c-.195 0-.554-.058-.738-.119l-2.052-.684c-.294-.098-.756-.197-1.07-.197h-1.642c-.038 0-.096 0-.132-.065a3.403 3.403 0 0 0-.696-1.069l-1.288-1.272a2.127 2.127 0 0 0-1.384-.568h-.707a2.352 2.352 0 0 0-.061-.438c-.088-.396-.038-.85.016-1.329.062-.557.126-1.131-.021-1.697-.04-.153.191-.563.36-.86.296-.525.664-1.178.664-1.949v-1.232c.057-.009.139-.018.249-.018 1.423 0 2.348-1.767 2.448-1.968.086-.174.299-.468.437-.605l.293-.293a8.6 8.6 0 0 1 .679-.601l.491-.386c.403-.313.684-.889.684-1.397 0-.344-.07-.854-.163-1.184l-.011-.038a3 3 0 0 0-.68-1.163l-.293-.292a.712.712 0 0 1-.135-.323v-.77c.415-.063.855-.273 1.135-.553l.292-.293c.22-.22.524-.586.708-.849.03-.032.173-.177.526-.407.393-.256.523-.412.679-.619.076-.104.166-.222.421-.46.608-.563.693-.644.726-.679h.001c.169-.193.465-.512.646-.693l1.294-1.293c.266-.266.555-.708.692-1.063.04-.071.096-.071.13-.071.898 0 1.381-.639 1.523-1.015a.59.59 0 0 1 .21-.211c.312-.117.798-.465.963-1.085.179.021.411.068.604.127.706.221 1.208-.012 2.23-1.036.215-.215.332-.277.364-.291h.002a.822.822 0 0 0 .815-.628c.025-.098.034-.191.035-.329a.902.902 0 0 0 1.003-.921v-.861c0-.689-.561-1.25-1.251-1.25h-2c-.478 0-1.045.235-1.383.572l-1.647 1.647a4.07 4.07 0 0 1-.118.115 1.245 1.245 0 0 0-.851-.335h-.503c.031-.045.059-.093.084-.145.25-.522-.027-1.021-.212-1.35-.007-.012-.015-.025-.021-.039.456-.143.808-.541.886-1.019.367-.144.751-.628 1.737-1.966.161-.222.362-.495.423-.565l1.282-1.283c.209-.209.515-.547.705-.781.037-.035.273-.238.828-.374.491-.121.945-.468 1.412-.918 8.681 7.034 14.493 17.474 15.381 29.266zm-20.499-19.07c.18-.138.356-.303.528-.475l1.646-1.646a.704.704 0 0 1 .323-.134h1.305c-.344.208-.528.588-.551 1.132-.223.104-.479.284-.783.588-.443.442-.661.602-.755.657-.304-.093-.737-.197-1.159-.197-.193 0-.381.022-.554.075zM51.664 2.697v.145c0 .159-.072.468-.144.611-.087.175-.854 1.744-.854 2.888 0 .623-.071.754-.073.759a.87.87 0 0 1-.063.064l-.292.293c-.284.284-.496.732-.557 1.151-.419.06-.867.271-1.151.556l-1.995 1.996c-.028.026-.479.431-1.119.431-.802 0-1.117.353-1.238.648a.927.927 0 0 0-.072.391c-.407.093-.817.339-1.057.653-.023.028-.264.308-.634.308-1.09 0-1.533.691-1.623 1.099a6.11 6.11 0 0 0-.127 1.151 1.1 1.1 0 0 1-.15.462c-.027.037-.521.729-.744 1.899-.224-.29-.606-.563-1.196-.605-.053-.141-.107-.385-.145-.545-.085-.379-.173-.77-.373-1.101-.253-.413-.55-.662-.893-.742v-2.302c.032-.087.182-.437.78-1.036.649-.647.622-1.175.485-1.504-.293-.708-1.204-.774-1.499-.776a.238.238 0 0 1-.082-.05 75.011 75.011 0 0 1-.718-1.43c-.073-.226-.248-.372-.405-.506a5.342 5.342 0 0 0-.53-.394c-.616-.4-1.21-.609-1.766-.621a1.774 1.774 0 0 1-.266-.024 37.864 37.864 0 0 0-.011-.733v-.01a35.245 35.245 0 0 1-.007-.977l.014-1.739a41.653 41.653 0 0 1 10.154-1.25c2.86 0 5.654.289 8.351.84z" />
      <path d="M29.342 43.618c.007-.166.021-.513-.252-.813-.241-.267-.592-.354-.904-.405-.973-.159-1.4-.303-1.4-.303a1.929 1.929 0 0 1-.543-.341l-.293-.293a2.115 2.115 0 0 0-1.383-.573h-2.001c-.689 0-1.25.561-1.25 1.25v.75c0 .577.529.968 1.052 1.099l.953.238c.031.31.265.985 1.653 1.157.188.023.311.056.385.08.143.533.63.926 1.207.926h2c.281 0 1.218-.056 1.517-.777.246-.595-.129-1.146-.486-1.504-.264-.262-.261-.359-.255-.491zm-2.564 1.272c-.097-.341-.444-.849-1.62-.994a1.895 1.895 0 0 1-.384-.081 1.433 1.433 0 0 0-1.014-1.024l-.946-.236v-.165h1.752a.704.704 0 0 1 .322.134l.293.293c.274.274.74.567 1.107.696.052.018.52.176 1.558.352.024.264.118.617.438 1.025h-1.506zM53.954 20.025c-.205.283-.289.665-.289 1.315 0 .111-.008.192-.019.25h-.732c-.594 0-1.172.406-1.374.967l-.021.059c-.096.266-.245.7-.333.969-.044.137-.411 1.355.283 2.223.312.394.688.51 1.029.51.366 0 .693-.135.862-.206.183.036.406.037.691.007.255-.027.485-.072.495-.073.194-.038.377-.074 1.614.063l.477.054.107.012a.755.755 0 0 0 .853-.68c.103-.074.218-.157.345-.251.285-.216.646-.59.836-.873.091-.138.337-.504.155-.956-.146-.363-.483-.553-.874-.678.135-.164.311-.351.479-.501.104-.093.625-.584.625-1.132 0-.512-.437-.922-.847-1.136l-.114-.06a3.154 3.154 0 0 0-1.29-.315h-1.999c-.191-.003-.643-.003-.959.432zm1.218 1.065h1.742c.133 0 .376.055.527.115a6.344 6.344 0 0 0-.49.517c-.324.381-.734.959-.577 1.565.043.169.196.552.695.732l-.023.019a12.08 12.08 0 0 1-.821.567c-1.306-.143-1.6-.105-1.965-.034a3.96 3.96 0 0 1-.566.068c-.351-.152-.702-.002-.904.085-.05.021-.128.054-.19.074-.087-.207-.038-.579.016-.753.082-.256.225-.669.315-.922l.01-.03a.028.028 0 0 1 .006-.003l.97-.001c.432 0 1.249-.366 1.249-1.75a2.63 2.63 0 0 1 .006-.249zM48.975 17.136l.546 1.092c.158.317.467.745.718.996l.292.293c.236.235.55.365.884.365.335 0 .649-.13.884-.365l.294-.293a2.11 2.11 0 0 0 .572-1.384.703.703 0 0 1 .135-.323l.292-.293a.718.718 0 0 1 .324-.134c.155 0 .464.075.602.146.008.005.229.117.466.213.261.105.953.386 1.36-.164.078-.105.311-.492-.005-.999a2.885 2.885 0 0 0-.385-.469c-1.008-1.037-1.17-1.193-1.375-1.392l-.282-.274a2.147 2.147 0 0 0-1.382-.561h-2.999c-.127 0-.392-.08-.496-.151-.313-.208-.794-.352-1.213-.127-.202.107-.542.385-.542 1.028v1.5a1.25 1.25 0 0 0 1.235 1.249c.023.008.058.03.075.047zm.19-2.179c.254.084.522.134.75.134h2.999c.082.001.277.08.337.137l.282.273.115.112c-.41.066-.842.274-1.117.551l-.292.293a2.117 2.117 0 0 0-.575 1.383.67.67 0 0 1-.133.323l-.117.117-.115-.115a3.044 3.044 0 0 1-.436-.606l-.554-1.106c-.213-.425-.669-.751-1.145-.838v-.658h.001z" />
    </g>
  </svg>
);

WorldIcon.propTypes = {
  color: PropTypes.string
};

export default WorldIcon;
