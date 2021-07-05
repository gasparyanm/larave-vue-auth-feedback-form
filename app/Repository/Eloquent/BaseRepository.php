<?php

namespace App\Repository\Eloquent;

use App\Repository\EloquentRepositoryInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class BaseRepository implements EloquentRepositoryInterface
{

    protected $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function create(array $attributes): Model
    {
        return $this->model->create($attributes);
    }

    public function find($id): ?Model
    {
        return $this->model->find($id);
    }

    public function all(): Collection
    {
        return $this->model->all();
    }

    /**
     * @param string $id
     * @param array $attributes
     * @return Model
     */
    public function update(string $id, array $attributes): ?Model
    {
        $model = $this->find($id);
        $model->update($attributes);

        return $model;
    }

    /**
     * @param string $id
     * @return bool
     */
    public function delete(string $id): bool
    {
        return $this->find($id)->delete();
    }

    /**
     * @param array $with
     * @return Builder
     */
    public function model(array $with = []): Builder
    {
        return $this->model->with($with);
    }
}
