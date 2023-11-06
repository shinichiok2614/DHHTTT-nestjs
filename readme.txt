docker exec -it dev-database bash
whoami
mysql -u mysqluser -p testdb   

nest g module chude
nest g service chude --no-spec
nest g controller chude --no-spec

nest g module baidang
nest g service baidang --no-spec
nest g controller baidang --no-spec

nest g module donvi
nest g service donvi --no-spec
nest g controller donvi --no-spec

nest g module nhiemvu
nest g controller nhiemvu --no-spec
nest g service nhiemvu --no-spec

auth: k useGuard, register, login
user: useGuard, get, update

yarn prisma db seed  : execute seed




getNhiemVuUser chưa làm xong